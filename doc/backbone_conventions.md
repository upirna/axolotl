# Dashboard Backbone conventions

## Models

Create `Page model` that ends with `Page` [extends Backbone.Model or BaseModel]

This one holds next self-explanatory attributes and methods

- `state` attribute is another `Backbone.Model` that holds all state variables of page model. Based on the state view
gets rendered. Here we usually hold `selectedId`s, boolean flags like `showUploadingProgress` etc
- `fetch()`: will fetch data from API. When last promise within `fetch` method is resolved we call `loadDependencies()`
- `loadDependencies()`: will call all other load methods. Load methods don't have any parameters. They usually compute
/ transform the data we need and set it to model with calling Backbone model's `set` method
- `refresh()` will first call `loadDependencies()` and trigger `refresh` event

Example:

```coffee
Backbone = require 'backbone'

class MainPage extends Backbone.Model

    defaults: ->
        audiences : null
        state     : new Backbone.Model
            selectedStuff : null

    fetch: ->
        @api.call.then (stuff) =>
            @set
                stuff: stuff

            @loadDependencies()

    loadStuff: ->
        stuff    = @get('stuff')
        newStuff = stuff.transfromations

        @set
            newStuff : newStuff

    loadDependencies: ->
        @loadStuff()

    refresh: ->
        @loadDependencies()
        @trigger 'refresh'

module.exports = MainPage
```

`Entity models` / `Entity collections`

Are very thin and only set properties like: `model` (for collections), `url` (to know what endpoint to call on sync),
`sortBy` (collections), `defaults()` to set default values

### Example

```coffee
Backbone = require 'backbone'

class Audience extends Backbone.Model

    defaults: ->
        folderId   : null
        name       : null
        isArchived : false

module.exports = Audience
```

## Views

`Page model` is passed as model to `Main view`. We want to strive to call view's `render()` function explicitly only on
two places.

1. after instantiation to do first render
2. whenever page model triggers `refresh` event

Example

```coffee
page = new MainPage
page.fetch().then ->
    view = new MainView
        model: page

    view.render()
    page.on 'refresh', => view.render() # re-render on page refresh
```

All child views that are rendered inside main view's `render` method should only be rendered there.

## Avoid

- avoid calling view's `render` method (except on parent view)
- avoid calling model's `set` method (except inside `Page model`)

## But how to avoid

Example

```coffee
audienceDetailsView = new AudienceDetailsView
    model     : selectedAudience
    pageModel : @model

audienceDetailsView.render()
```

Pass `pageModel` down to child views so child view can call a method on it. If we're consistent with this one should
easily open `pageModel` and see which methods are calling `refresh()` and which aren't.

## Event listeners

Don't ever create new event listener lightly. Do whatever you can with `refresh` event. If for some reason you need
another event, please avoid using Backbone's `change:property`. You can be more explicit and use
`@trigger 'good-event-name'` and listen to it and another developer can easily search it up. Otherwise you can never
know which model property has some change events bound to it and which one doesn't. This makes it hard to find where
changes are coming from.

## Naming and style

- file names are `lowercase_with_underscores`
- page models and collections ends with `_page.coffee`
- view classes end `View`, for instance `ReportView`
- events naming: `handle<ActionName>Action`

```coffee
events:
    'click [data-action=expandAudience]': 'handleExpandAudienceClick'
    'blur  [data-action=editAudienceLabel]': 'handleEditAudienceLabelBlur'
```
