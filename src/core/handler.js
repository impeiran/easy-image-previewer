import dom from '../util/dom'
import util from '../util'

const mergeOptions = (defaults, option) => {
  let curOption = {}
  if (typeof option === 'string') {
    curOption.list = [{ url: option }]
  } else if (option instanceof Array) {
    curOption.list = option
  } else if (typeof option === 'object' && option !== null) {
    curOption = option
  }

  return util.assign({}, defaults, curOption)
}

export default {
  show (option) {
    if (this.showing) return

    if (!this.mounted || !dom(`#${this.id}`)) {
      this._mount()
    }

    const currentOption = mergeOptions(this.setting, option)

    if (util.isEmpty(currentOption.list)) return

    this.list = currentOption.list || []
    this.currentIndex = currentOption.index || 0

    this._loadImg()
    
    this.showing = true
    return this
  },

  close () {
    this.showing = false
    this.loading = false
    return this;
  },

  prev () {
    this.currentIndex = this.setting.loop
      ? this.currentIndex === 0
          ? this.list.length - 1
          : this.currentIndex - 1
      : Math.max(this.currentIndex, 0)
    
    this._loadImg()
  },

  next () {
    this.currentIndex = this.setting.loop
      ? (this.currentIndex + 1) % this.list.length
      : Math.min(this.currentIndex, this.list.length)
  
    this._loadImg()
  },

  destory () {
    // destroy events
    Object.keys(this.listener).forEach(k => {
      const event = this.listener[k]
      event.destory && event.destory()
    })
  },

  _loadImg () {
    this.loadingTimer = setTimeout(() => {
      this.loading = true
    }, 400)
    this.imgElement.style = 'display: none;'
    this.imgElement.src = (this.list[this.currentIndex] || {}).url
  }
}