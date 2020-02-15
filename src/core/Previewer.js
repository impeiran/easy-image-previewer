import util from '../util'
import defaultSetting from './defaults'
import dom from '../util/dom'
import { NAMESPACE } from '../util/constants'

let id = 1

class Previewer {
  constructor (config) {
    this.id = `__${NAMESPACE}${id++}`
    this.mounted = false
    this.setting = util.assign(defaultSetting, config || {})
  }

  _init () {
    const previewer = document.createElement('div')
  }

  show (option) {
    if (this.mounted || !dom(`#${this.id}`)) {
      this._init()
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

module.exports = Previewer;