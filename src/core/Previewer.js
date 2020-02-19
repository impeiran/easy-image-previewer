import util from '../util'
import defaultSetting from './defaults'
import hook from './hook'

import dom, {
  createEl,
  addClass,
  removeClass
} from '../util/dom'

import {
  NAMESPACE,
  CLASS_NAME_VISIBLE,
  CLASS_NAME_HIDE,
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

    Object.defineProperty(this, 'showing', {
      set (val) {
        console.log(666)
        return val
      }
    })
  }

  _init () {
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
  }

  show (option) {
    if (!this.mounted || !dom(`#${this.id}`)) {
      this._init()
    }

    if (this.showing) {
      return
    }

    removeClass(this.root, CLASS_NAME_HIDE)
    addClass(this.root, CLASS_NAME_VISIBLE)
    this.showing = true

    return this
  }

  close () {
    this.showing = false
    addClass(this.root, CLASS_NAME_HIDE)
    removeClass(this.root, CLASS_NAME_VISIBLE)
    return this;
  }
}

util.assign(Previewer.prototype, hook)

export default Previewer