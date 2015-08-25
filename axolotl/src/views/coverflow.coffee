$                   = require 'jquery'
BaseView            = require '../../../shared/views/base.coffee'
CreativesCollection = require '../../../shared/collections/creatives.coffee'
CoverflowModel      = require '../models/coverflow.coffee'
{ stfu, gtfo }      = require '../../../shared/util/events.coffee'


class CoverflowView extends BaseView

    templateName : 'coverflow'
    className    : 'coverflow'

    constructor: (options) ->
        super
        
        @collection     = new CreativesCollection unless @collection?
        @coverflowModel = new CoverflowModel
        @currentItem    = 0
        @campaigns      = options.campaigns
        
        @barWidth           = 300
        @widthOfSlidingArea = 600
                
        @deltaSum           = 0

    events:
        'click [data-action=goToItem]' : 'handleGoToItemClick'
        'mousewheel .slide-container'  : 'handleMousewheel'

    getTemplateData: ->
        data = super
        data.collection = @collection.map (model, i) ->
            item          = model.toJSON()
            item.cssClazz = "s-#{i+1}"
            item
        data

    render: ->
        super

        @$('.slide-container').removeClass 'loading'

        if @collection.length > 0
            
            if @canShowScrollbar()
                # Interval cannot be float, beacuse of problem with counting.
                # Range is width of area, where scrollbar can be moved.
                @interval = Math.round(@widthOfSlidingArea / (@collection.length - 1))
                @range    = @barWidth + @interval * (@collection.length - 1)
            
            @coverflowModel.set maxPosition : @collection.length
            @coverflowModel.bind 'moveCoverFlow', @moveCoverFlow
            
            @$el.show()
            @goToItem 0

        else
            @$el.hide()

        $(window).bind 'resize', => @goToItem @currentItem
        
        if @canShowScrollbar()
            @showScrollbar()
        else
            @hideScrollbar()
    
    moveCoverFlow: (targetPosition) =>
        if targetPosition isnt @currentItem
            @goToItem targetPosition
            @coverflowModel.set currentPosition : @currentItem, silent : yes
            @moveScrollbar()
    
    moveScrollbar: ->
        @$('.scrollbar-container .bar').css 'left', (@interval * @currentItem + 'px')
     
    dragScrollBar : (ev, ui) =>
        # There is no need to have smooth move of scrollbar when dragging scrollbar.
        @$('.scrollbar-container .bar').removeClass 'transition'
        
        targetPosition = ui.position.left / @interval
        
        @coverflowModel.set
            startingPosition : targetPosition
            currentPosition  : @currentItem
        , silent : yes
        
        @goToItem targetPosition
        
        @$('.scrollbar-container .bar').addClass 'transition'
    
    canShowScrollbar: ->
        if @collection.length > 1 then yes else no
    
    showScrollbar: ->
        # @$('.scrollbar-container .bar').draggable
        #     axis        : 'x'
        #     containment : 'parent'
        #     grid        : [@interval]
        
        @$('.scrollbar-container .bar').bind 'drag', @dragScrollBar
        
        @$('.scrollbar-container').css
            'opacity' : 1
            'width'   : @range

        $(@el).addClass 'displayed-scrollbar'
        
    hideScrollbar: ->
        @$('.scrollbar-container').css('opacity', 0)
        @$('.coverflow').removeClass 'displayed-scrollbar'

    goToItem: (n) ->
        @currentItem = n.clamp 0, @collection.length - 1
        model = @getSelectedModel()
        items = @$ 'li'
        items.removeClass('left right')
        before = items.filter(":lt(#{@currentItem})").addClass('left')
        after = items.filter(":gt(#{@currentItem})").addClass('right')

        before.each((idx) -> $(@).css('z-index', idx))
        after.each((idx) -> $(@).css('z-index', after.length - idx))
        items.eq(@currentItem).css 'z-index', items.length

        # 200 refers to the width+margin of the centered element
        offset = (@$('.slide-container').width() - 200) / 2

        # 70 is a magic number, denoting the width of the skewed elements
        @_moveTo -@currentItem * 70 + offset
        
        if model?
            
            creativeName = model.get 'name'
            campaignName = @campaigns.get(model.get('folderId'))?.get('name') or ''
            folderId     = model.get('folderId')
            
            escapedCreativeName = $("<div>").text(creativeName).html()
            escapedCampaignName = $("<div>").text(campaignName).html()

            @$('.info').html(
                "<a class=\"creative-name\" href='builder/#path=creatives/#{model.id}' title='#{escapedCreativeName}'>#{escapedCreativeName}</a> <br/>" +
                "<a href='#campaigns/#{folderId}' title='#{escapedCampaignName}'>#{escapedCampaignName}</a>"
            )

    _moveTo: (amount) ->
        transform = "translateX(#{amount}px)"
        @$('ul').css
            '-webkit-transform' : transform
            '-moz-transform'    : transform
            'transform'         : transform

    getSelectedModel: ->
        @collection.at @currentItem
    
    handleGoToItemClick: (ev) ->
        $el = $ ev.target
        $el = $el.closest 'li' unless $el is 'li'
        
        unless $el.index() is @currentItem
            stfu ev
            @coverflowModel.set
                startingPosition : $el.index()
                currentPosition  : $el.index()
            , silent : yes
            
            @goToItem $el.index()
            @moveScrollbar()

    handleMousewheel: (ev, delta) ->
        stfu ev

        # get time difference between last two onMouseWheelEvents
        now = (new Date()).getTime()
        timeDelta = now - @previous
        @previous = now

        if timeDelta > 100
            # If user who is using "old school mouse with wheel" wants to move one by one item
            # in coverflow, I assume, that he cannot do this faster than in 100ms.
            # Threshold is 0.1 because Safari returns delta=0.1 on moving wheel with old school mouse (not apple's magic mouse)
            threshold = 0.1
        else
            threshold = 1

        if (@deltaSum < 0 and delta < 0) or (@deltaSum > 0 and delta > 0)
            @deltaSum = 0

        @deltaSum += -delta

        if @deltaSum >= threshold
            @coverflowModel.set
                counter : @coverflowModel.get('counter') + 1
            @deltaSum = 0
        else if @deltaSum <= -threshold
            @coverflowModel.set
                counter : @coverflowModel.get('counter') - 1
            @deltaSum = 0

module.exports = CoverflowView