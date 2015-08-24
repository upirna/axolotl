# Testing conventions

We're using [Testem](https://github.com/airportyh/testem) runner with
[Jasmine 1.3](http://jasmine.github.io/1.3/introduction.html). When we upgrade `testem` we'll use newer Jasmine.

## Naming

- use same as file name you're testing, just append `_spec` to name before extension
- use same directory path as file you're testing

## Mock Server

We're using [SinonJS](https://github.com/cjohansen/Sinon.JS).

```coffee
sinon = require 'sinon'

module.exports = ->
    server             = sinon.fakeServer.create()
    server.autoRespond = yes

    # Default response as an empty array
    server.respondWith 'GET', /.*/,
        [
            200
            { 'Content-Type': 'application/json' }
            JSON.stringify []
        ]

    server.respondWith 'GET', /folders\/\w+/,
        [
            200
            { 'Content-Type': 'application/json' }
            JSON.stringify
                canCreateAudiences: yes
        ]
```

To use this server you need to put this line in your spec file

```coffee
do require '../path-to/mock_server.coffee'
```

## Not yet best practices

Do model testing when you're solving more algorithmic problem. Do plain unit tests whenever function is all you need.
These are the fastest and won't change a lot. Do unit testing TDD style.

View tests will probably change the most, so I like to write them after development is done, not TDD style where you
test before hand. That's because during development views and templates are changing a lot and you don't want to write
many tests that depend on specific DOM selectors yet. After behavior is more or less stable add view tests to test
what user should se when she does something. This are high level tests but they exercise most of the code base and give
most guarantee that our code is doing what it should.
