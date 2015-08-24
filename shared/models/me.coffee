User = require './user.coffee'

class Me extends User
    
    url: -> 'me'

module.exports = Me