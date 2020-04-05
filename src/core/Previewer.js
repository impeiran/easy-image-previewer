import util from '../util'
import handler from './handler'
import event from './event'
import defaultSetting from './defaults'

import dom, {
  addClass,
  toggleClass
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
    this.loadingTimer = null

    this._initRatio()
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
  }

  _initRatio () {
    this.maxWidth = Math.floor(document.documentElement.clientWidth * 0.8)
    this.maxHeight = Math.floor(document.documentElement.clientHeight * 0.8)
    this.screenRatio = this.maxWidth / this.maxHeight
  }

  _initWatcher () {
    const state = {
      showing: false,
      loading: false
    }

    const triggerMap = {
      showing: function (status) {
        toggleClass(this.root, CLASS_NAME_HIDE, !status)
        toggleClass(this.root, CLASS_NAME_VISIBLE, status)
      },

      loading: function (status) {
        toggleClass(this.root, CLASS_NAME_LOADING, status)
      }
    }

    Object.keys(triggerMap).forEach(attr => {
      const val = state[attr]
      Object.defineProperty(this, attr, {
        configurable: true,
        enumerable: true,
        get () {
          return val
        },
        set (newVal) {
          state[attr] = newVal
          triggerMap[attr].call(this, newVal)
        }
      })
    })
  }
}

util.assign(Previewer.prototype, event, handler)

export default Previewer