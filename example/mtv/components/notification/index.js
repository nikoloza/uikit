'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('~/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('vigour-element/lib/events/css/animationEnd')
)

module.exports = new Element({
  0: {
    title: new ui.P('Success:'),
    aside: {
      node: 'aside',
      css: 'notification',
      notif: new ui.Success({
        on: {
          click: {
            bringBack: function () {
              var parent = this.parent
              setTimeout(function () {
                parent.set({
                  notif: new ui.Success()
                })
              }, 1000)
            }
          }
        }
      })
    }
  },

  1: {
    title: new ui.P('Warning:'),
    aside: {
      node: 'aside',
      css: 'notification',
      notif: new ui.Warning({
        on: {
          click: {
            bringBack: function () {
              var parent = this.parent
              setTimeout(function () {
                parent.set({
                  notif: new ui.Warning()
                })
              }, 1000)
            }
          }
        }
      })
    }
  },

  2: {
    title: new ui.P('Error:'),
    aside: {
      node: 'aside',
      css: 'notification',
      notif: new ui.Error({
        on: {
          click: {
            bringBack: function () {
              var parent = this.parent
              setTimeout(function () {
                parent.set({
                  notif: new ui.Error()
                })
              }, 1000)
            }
          }
        }
      })
    }
  }
})