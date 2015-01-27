extend = require 'extend'
inherits = require 'inherits'
EventEmitter2 = require('eventemitter2').EventEmitter2

class YouTube
  "use strict"

  inherits @, EventEmitter2

  _apiLoaded = false
  @isAPILoaded: -> _apiLoaded

  # todo: 評価時YouTube APIロード
  do ->
    window.onYouTubeIframeAPIReady = -> _apiLoaded = true
    script = document.createElement 'script'
    script.src = 'https://www.youtube.com/iframe_api'
    firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore script, firstScriptTag

  _defaults:
    width: '640'
    height: '390'
    videoId: ''
    playerVars: null
    onReady: ->
    onStateChange: ->

  constructor: (@el, opts) ->
    EventEmitter2.call @
    @opts = extend {}, @_defaults, opts
    @id = @el.id
    # @init() if _apiLoaded is false

  create: ->
    @player = new YT.Player @id,
      width: @opts.width
      height: @opts.height
      videoId: @opts.videoId
      playerVars: @opts.playerVars
      events:
        onReady: @opts.onReady
        onStateChange: @opts.onStateChange

  # init: ->
  #   script = document.createElement 'script'
  #   script.src = 'https://www.youtube.com/iframe_api'
  #   firstScriptTag = document.getElementsByTagName('script')[0]
  #   firstScriptTag.parentNode.insertBefore script, firstScriptTag

  #   _apiLoaded = true
  #   return this

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

if typeof define is 'function' and define.amd
  define -> YouTube
else if typeof module isnt 'undefined' and module.exports
  module.exports = YouTube
else
  window.YouTube or= YouTube
