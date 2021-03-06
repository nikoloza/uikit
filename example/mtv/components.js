'use strict'

var app = require('./app')
var Element = require('vigour-element')
var ui = require('../../lib')

require('./less/style.less')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/size'),
  require('vigour-element/lib/property/scroll'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/event/click')
)

app.set({
  components: new Element({
    header: require('./components/header'),
    container: new ui.Container({
      css: {
        add: 'main'
      },
      components: {
        node: 'section',
        title: new ui.H3('Components:'),
        images: {
          title: new ui.H5('Images:'),
          vigourLogo: new ui.Img('assets/img/icon.png')
        },
        progressbars: require('./components/progressbars'),
        modals: require('./components/modal'),
        fade: {
          node: 'section',
          title: new ui.H5('Fade:'),
          aside: {
            node: 'aside',
            css: 'fade ui-background-primary',
            fade: new ui.Fade({
              css: {
                scheme: 'light'
              }
            }),
            fade2: new ui.Fade()
          }
        },
        lists: {
          node: 'section',
          title: new ui.H5('List items:'),
          aside: {
            listsTitle: new ui.P('Aside items:'),
            aside: require('./components/lists').lists
          },
          asideForms: {
            title: new ui.P('Form items:'),
            aside: require('./components/lists').forms
          }
        },
        notifications: require('./components/notification')
      }
    }),
    hr: new ui.Hr()
  })
})
