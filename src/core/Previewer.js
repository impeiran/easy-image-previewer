import util from '../util'
import defaultSetting from './defaults'

import dom, {
  addClass
} from '../util/dom'

import {
  NAMESPACE,
  TEMPLATE
} from '../util/constants'

let id = 1

class Previewer {
  constructor (config) {
    this.id = `__${NAMESPACE}${id++}`
    this.mounted = false
    this.showing = false
    this.setting = util.assign(defaultSetting, config || {})
  }

  _init () {
    const previewer = document.createElement('div')

    previewer.id = this.id
    previewer.innerHTML = TEMPLATE

    addClass(previewer, `${NAMESPACE}`)
    addClass(previewer, `${NAMESPACE}--visible`)

    const settingMount = this.setting.mount
    if (typeof settingMount === 'string') {
      this.setting.mount = dom(settingMount)
    }
    this.setting.mount.appendChild(previewer)
  }

  show (option) {
    if (!this.mounted || !dom(`#${this.id}`)) {
      this._init()
    }

    if (this.showing) {
      return
    }

    return this
  }

  close () {

  }

  onShow () {
    return this;
  }

  onChange () {
    return this;
  }

  onClose () {
    return this;
  }

  
}

export default Previewer