import util from '../util'
import hook from './hook'
import handler from './handler'
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
  TEMPLATE
} from '../util/constants'

let id = 1

class Previewer {
  constructor (config) {
    this.id = `__${NAMESPACE}${id++}`
    this.mounted = false
    this.showing = false
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
    this.footer = previewer.querySelector(`.${CLASS_NAME_FOOTER}`)

    this.corner.onclick = () => {
      this.close()
    }

    /**
     * mount dom into view
     */
    const settingMount = this.setting.mount
    if (typeof settingMount === 'string') {
      this.setting.mount = dom(settingMount)
    }
    this.setting.mount.appendChild(previewer)
    this.mounted = true
    this.loading = true
  }

  _initWatcher () {
    const _this = this
    const triggerMap = {
      'showing': function (status) {
        if (status) {
          removeClass(_this.root, CLASS_NAME_HIDE)
          addClass(_this.root, CLASS_NAME_VISIBLE)
        } else {
          addClass(_this.root, CLASS_NAME_HIDE)
          removeClass(_this.root, CLASS_NAME_VISIBLE)
        }
      },

      'loading': function (status) {
        if (status) {
          addClass(_this.root, CLASS_NAME_LOADING)
        } else {
          removeClass(_this.root, CLASS_NAME_LOADING)
        }
      }
    }

    Object.keys(triggerMap).forEach(attr => {
      Object.defineProperty(_this, attr, {
        set (val) {
          triggerMap[attr].call(_this, val)
        }
      })
    })
  }
}

util.assign(Previewer.prototype, hook, handler)

export default Previewer