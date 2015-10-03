do require './server.coffee'
do require '../../shared/init.coffee'
do require '../../shared/util/number_extensions.coffee'
do require '../../shared/util/backbone_helpers.coffee'
do require '../../shared/handlebars_helpers.coffee'
do require '../../shared/util/array_extensions.coffee'

Platform = require '../../shared/models/platform.coffee'
Account  = require '../../shared/models/account.coffee'
Me       = require '../../shared/models/me.coffee'
Client   = require '../../shared/api_client.coffee'

Backbone            = require 'backbone'
DefaultLayoutView   = require '../../shared/views/default_layout.coffee'
CampaignsPageView   = require './views/campaigns_page.coffee'
DefaultView         = require './views/default.coffee'
CampaignsPage       = require './models/campaigns_page.coffee'

platform    = new Platform require('./fixtures/platform.json')
currentUser = new Me require('./fixtures/me.json')
account     = new Account require('./fixtures/account.json')
api         = new Client

api      = new Client
api.url  = platform.get('apiUrl')


layout = new DefaultLayoutView
layout.render()

Router = Backbone.Router.extend({

    routes: {
        "campaigns" : "campaigns",
        "*path"     : "default"
    },

    campaigns: ->
        layout.hidePage()
        page = new CampaignsPage
            account     : account
            currentUser : currentUser
            platform    : platform
            api         : api

        page.fetch().then( =>
            view   = new CampaignsPageView
                model  : page
                api    : api       

            layout.showPage view
        )

    default: ->
        layout.hidePage()
        view = new DefaultView
        layout.showPage view
})

router = new Router
Backbone.history.start()
