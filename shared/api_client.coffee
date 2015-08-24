CeltraApiClient = require 'celtra-api-client'
Report          = require './util/report.coffee'
ReportSpec      = require './util/report_spec.coffee'
Cube            = require './util/Cube.js'
constants       = require '../_compiled/constants.js'
_               = require 'underscore'
Q               = require 'q'

class ApiClient extends CeltraApiClient

    constructor: (options) ->
        super

        @apiWarning         = options.apiWarning if options?.apiWarning?
        @maintenanceWarning = options.maintenanceWarning if options?.maintenanceWarning?

        @url = 'api/'

    request: (method, path, reqBody, config, callback) ->
        if typeof config isnt 'object'
            callback = config
            config   = null

        cb = (error, body, responseCode) =>
            if responseCode is 503 and ['POST', 'PUT', 'DELETE'].indexOf(method) isnt -1
                @maintenanceWarning?.set
                    postponedApiCall : ( => @request method, path, reqBody, config, cb )
            else if responseCode is 412
                confirmCb = =>
                    config?.headers?['X-Celtra-If-No-Warnings'] = "no"
                    @request method, path, reqBody, config, cb

                @apiWarning?.set
                    warnings   : error
                    callback   : confirmCb
                    identifier : connection
            else
                if method is 'POST' or method is 'PUT' or method is 'DELETE'
                    @maintenanceWarning?.set
                        postponedApiCall : null

                callback?.apply @, arguments

        connection = super(method, path, reqBody, config, cb)

    getReport: ->
        if arguments[0] instanceof ReportSpec
            [spec, options, callback] = arguments
        else
            [metrics, dimensions, filters, sorts, limit, options, callback] = arguments
            spec = new ReportSpec metrics, dimensions, filters, sorts, limit

        if typeof options is 'object'
            options = _.extend { bg: no, compact: yes }, options
        else
            callback = options
        
        url  = spec.toApiUrl()
        url += '&compact=1' unless options.compact is no
        url += '&bg=1'      if options.bg
        
        cb = (error, body, code, headers) ->
            spec   = new ReportSpec body.spec.metrics, body.spec.dimensions, body.spec.filters, body.spec.sorts, body.spec.limit
            report = new Report spec, body.updateTimestamp, body.rows, body.notes

            callback error, report, code, headers

        @get url, cb

    getCube: ->
        if arguments[0] instanceof ReportSpec
            [spec, options, callback] = arguments
        else
            [metrics, dimensions, filters, options, callback] = arguments
            
            for metric in metrics
                if constants.getMetricById(metric).computed
                    matches = constants.getMetricById(metric).formula.match(/[a-z]\w*/g)

                    for match in matches
                        metrics = metrics.concat(match) if metrics.indexOf(match) is -1

            spec = new ReportSpec metrics, dimensions, filters

        callback = options unless typeof options is 'object'

        reportCallback = (error, report, code, headers) ->
            if error
                callback error, null, report, code, headers
            else
                fields = report.getSpec().getDimensions().concat report.getSpec().getMetrics()
                facts  = report.getRows().map (row) ->
                    fact = {}
                    fact[fields[i]] = row[i] for i in [0..fields.length]
                    fact

                cube = new Cube report.getSpec().getMetrics(), report.getSpec().getDimensions(), facts
                callback error, cube, report, code, headers

        if typeof options is 'object'
            @getReport spec, options, reportCallback
        else
            @getReport spec, reportCallback

module.exports = ApiClient
