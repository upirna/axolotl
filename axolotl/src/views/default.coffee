BaseView = require '../../../shared/views/base.coffee'
{ meh, noop, stfu, gtfo }   = require '../../../shared/util/events.coffee'

class DefaultView extends BaseView
    
    templateName : 'default'

module.exports = DefaultView