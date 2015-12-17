require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

module.exports = new Element({
  node: 'section',

  title: new ui.H5('Buttons:'),

  sizes: {
    title: new ui.P('Button sizes:'),

    item0: new ui.Button({
      ui: {
        size: 'large'
      }
    }),
    item1: new ui.Button({
      ui: {
        size: 'big'
      }
    }),
    item2: new ui.Button({
      ui: {
        size: 'medium'
      }
    }),
    item3: new ui.Button({
      ui: {
        size: 'small'
      }
    })
  },

  colors: {
    title: new ui.P('Button colors:'),

    item0: new ui.Button({
      ui: {
        scheme: 'primary',
        inverse: true
      }
    }),

    item1: new ui.Button({
      ui: {
        scheme: 'secondary',
        inverse: true
      }
    }),

    item2: new ui.Button({
      ui: {
        scheme: 'tertiary',
        inverse: true
      }
    }),

    item3: new ui.Button({
      ui: {
        scheme: 'graylight',
        inverse: true
      }
    }),

    item4: new ui.Button({
      ui: {
        scheme: 'graydark',
        inverse: true
      }
    }),

    item5: new ui.Button({
      ui: {
        scheme: 'blackwhite',
        inverse: true
      }
    })
  },

  types: {
    title: new ui.P('Button types:'),

    italic: new ui.Button({
      ui: {
        scheme: 'tertiary',
        inverse: true,
        size: 'big',
        type: 'italic-button'
      }
    }),
    withIcon: new ui.Button({
      ui: {
        size: 'big',
        scheme: 'tertiary',
        inverse: true
      },
      text: 'Next',
      icon: new ui.Icon('right')
    }),
    iconic: new ui.Button('Register').set({
      ui: {
        size: 'big',
        scheme: 'tertiary',
        inverse: true,
        type: 'iconic'
      },
      text: '',
      icon: new ui.Icon('right')
    })
  }
})
