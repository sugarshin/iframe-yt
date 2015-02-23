###!
 * @license iframe-yt
 * (c) sugarshin
 * License: MIT
###

"use strict"

do (root = this, factory = (EventEmitter2, Promise, objectAssign) ->

  if objectAssign is undefined then objectAssign = (out) ->
    out or= {}
    for i in [1...arguments.length]
      unless arguments[i] then continue
      for own key, val of arguments[i]
        out[key] = val
    return out

  class IframeYT extends EventEmitter2

    _apiLoaded = false

    do ->
      window.onYouTubeIframeAPIReady = -> _apiLoaded = true
      script = document.createElement 'script'
      script.src = 'https://www.youtube.com/iframe_api'
      firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore script, firstScriptTag

    @isAPILoaded: -> _apiLoaded

    @apiLoad: ->
      new Promise (resolve, reject) ->
        _timerID = null
        do _apiLoad = ->
          _timerID = setTimeout ->
            if _apiLoaded
              resolve()
              clearTimeout _timerID
            _apiLoad()
          , 100

        setTimeout ->
          clearTimeout _timerID
          reject new Error 'Load error from YouTube iframe API'
        , 10000

    _defaults:
      width: '640'
      height: '390'
      videoId: ''
      playerVars: null
      onReady: () ->
      onStateChange: () ->

    _configure: (el, opts) ->
      @el = el
      @opts = objectAssign {}, @_defaults, opts
      @id = @el.id

    constructor: (el, opts) ->
      EventEmitter2.call @
      @_configure el, opts

    create: ->
      @player = new window.YT.Player @id,
        width: @opts.width
        height: @opts.height
        videoId: @opts.videoId
        playerVars: @opts.playerVars
        events:
          onReady: @opts.onReady
          onStateChange: @opts.onStateChange
      return this

    play: ->
      @player.playVideo()
      @emit 'playvideo'
      return this

    pause: ->
      @player.pauseVideo()
      @emit 'pausevideo'
      return this

    stop: ->
      @player.stopVideo()
      @emit 'stopvideo'
      return this

) ->
  if typeof module is 'object' and typeof module.exports is 'object'
    module.exports = factory require('eventemitter2').EventEmitter2, require('bluebird'), require('object-assign')
  else
    root.IframeYT or= factory(root.EventEmitter2, root.Promise)
  return
