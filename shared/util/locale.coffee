module.exports = {

    setDefaultAccountLocale: (accountLocale) ->
        @accountLocale = accountLocale
        @_setLocale()

    setDefaultUserLocale: (userLocale) ->
        @userLocale = userLocale
        @_setLocale()

    _setLocale: ->
        if @userLocale then @locale = @userLocale else @locale = @accountLocale

    getThousandsSeparator: ->
        switch @locale
            when 'en_UK'
                separator = ','
            when 'de_DE'
                separator = '.'
            else
                separator = ','

        separator

    getDecimalSeparator: ->
        switch @locale
            when 'en_UK'
                separator = '.'
            when 'de_DE'
                separator = ','
            else
                separator = '.'

        separator
    
    getDateFormatWithDayInWeek: ->
        switch @locale
            when 'en_UK'
                format = 'ddd, D/M/YYYY'
            when 'de_DE'
                format = 'ddd, D.M. YYYY'
            else
                format = 'ddd, M/D YYYY'

        format
    
    getShortDateFormat: ->

        switch @locale
            when 'en_UK'
                format = 'D/M'
            when 'de_DE'
                format = 'D.M.'
            else
                format = 'M/D'

        format

    getDateFormat: (shortYear = no) ->

        yearFormat = if shortYear then 'YY' else 'YYYY'

        switch @locale
            when 'en_UK'
                format = 'D/M/' + yearFormat
            when 'de_DE'
                format = 'D.M.' + yearFormat
            else
                format = 'M/D/' + yearFormat

        format

    getDateFormatWithLongMonthName: ->

        switch @locale
            when 'en_UK'
                format = 'MMMM Do, YYYY'
            when 'de_DE'
                format = 'D. MMMM, YYYY'
            else
                format = 'MMMM D, YYYY'

        format

    getDateFormatWithShortMonthName: (shortYear = no) ->

        yearFormat = if shortYear then 'YY' else 'YYYY'

        switch @locale
            when 'en_UK'
                format = 'MMM Do, ' + yearFormat
            when 'de_DE'
                format = 'D. MMM, ' + yearFormat
            else
                format = 'MMM D, ' + yearFormat

        format

    getJqueryUiDatePickerFormat: ->
        
        switch @locale
            when 'en_UK'
                format = 'dd/mm/yy'
            when 'de_DE'
                format = 'dd.mm.yy'
            else
                format = 'mm/dd/yy'

        format

    getDateTimeFormat: ->
        
        switch @locale
            when 'en_UK'
                format = 'D/M/YYYY, h:mma'
            when 'de_DE'
                format = 'D.M.YYYY, HH:mm'
            else
                format = 'M/D/YYYY, h:mma'

        format

    getTimeFormat: ->
        
        switch @locale
            when 'en_UK'
                format = 'h:mma'
            when 'de_DE'
                format = 'HH:mm'
            else
                format = 'h:mma'

        format

    getFirstDay: ->

        switch @locale
            when 'en_UK'
                day = 1
            when 'de_DE'
                day = 1
            else
                day = 0
        day
}
