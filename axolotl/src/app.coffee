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
CampaignsPage       = require './models/campaigns_page.coffee'

platform    = new Platform require('./fixtures/platform.json')
currentUser = new Me require('./fixtures/me.json')
account     = new Account require('./fixtures/account.json')
api         = new Client

api      = new Client
api.url  = platform.get('apiUrl')

page = new CampaignsPage
    account     : account
    currentUser : currentUser
    platform    : platform
    api         : api

page.fetch
    success: ->
        layout = new DefaultLayoutView
        view   = new CampaignsPageView
            model  : page
            api    : api

        layout.render()

        layout.showPage view

    error: ->
        console.log 'Error'
