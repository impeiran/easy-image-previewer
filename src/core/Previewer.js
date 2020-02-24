import util from '../util'
import hook from './hook'
import handler from './handler'
import event from './event'
import defaultSetting from './defaults'

import dom, {
  createEl,
  addClass,
  removeClass
} from '../util/dom'

import {
  NAMESPACE,
  CLASS_NAME_VISIBLE,
  CLASS_NAME_HIDE,
  CLASS_NAME_LOADING,
  CLASS_NAME_CORNER,
  CLASS_NAME_INDICATOR,
  CLASS_NAME_BOARD,
  CLASS_NAME_FOOTER,
  CLASS_NAME_TOOLBAR,
  TEMPLATE
} from '../util/constants'

let id = 1

class Previewer {
  constructor (config) {
    this.id = `__${NAMESPACE}${id++}`
    this.mounted = false
    this.currentIndex = 0
    this.list = []
    this.setting = util.assign(defaultSetting, config || {})

    this._initWatcher()
  }

  _mount () {
    const previewer = document.createElement('div')

    previewer.id = this.id
    previewer.innerHTML = TEMPLATE

    addClass(previewer, `${NAMESPACE}`)
    addClass(previewer, `${CLASS_NAME_VISIBLE}`)

    this.root = previewer
    this.corner = previewer.querySelector(`.${CLASS_NAME_CORNER}`)
    this.indicator = previewer.querySelector(`.${CLASS_NAME_INDICATOR}`)
    this.board = previewer.querySelector(`.${CLASS_NAME_BOARD}`)
    this.imgElement = this.board.querySelector('img')
    this.footer = previewer.querySelector(`.${CLASS_NAME_FOOTER}`)
    this.toolbar = previewer.querySelector(`.${CLASS_NAME_TOOLBAR}`)

    /**
     * mount dom into view
     */
    const settingMount = this.setting.mount
    if (typeof settingMount === 'string') {
      this.setting.mount = dom(settingMount)
    }
    this.setting.mount.appendChild(previewer)
    this.mounted = true

    this._initEvent()
    // this.loading = true
  }

  _initWatcher () {
    const triggerMap = {
      'showing': function (status) {
        if (status) {
          removeClass(this.root, CLASS_NAME_HIDE)
          addClass(this.root, CLASS_NAME_VISIBLE)
        } else {
          addClass(this.root, CLASS_NAME_HIDE)
          removeClass(this.root, CLASS_NAME_VISIBLE)
        }
      },

      'loading': function (status) {
        if (status) {
          addClass(this.root, CLASS_NAME_LOADING)
        } else {
          removeClass(this.root, CLASS_NAME_LOADING)
        }
      }
    }

    Object.keys(triggerMap).forEach(attr => {
      Object.defineProperty(this, attr, {
        configurable: true,
        enumerable: true,
        set (val) {
          triggerMap[attr].call(this, val)
        }
      })
    })
  }
}

util.assign(Previewer.prototype, hook, event, handler)

export default Previewer