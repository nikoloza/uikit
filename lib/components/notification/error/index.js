'use strict'

// dependencies
var Element = require('vigour-element')

// components
var Notification = require('../index')
var NotificationButton = require('../notification-button')
var Icon = require('../../icon')
var Text = require('../../../text')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Error Notification
 */
module.exports = new Notification({
  css: {
    addClass: 'ui-error'
  },
  icon: new Icon('wrong'),
  caption: {
    title: new Text.H7('Invalid entry, please revise.')
  },
  button: new NotificationButton()
}).Constructor