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
    console.log(this.showing)
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

  _loadImg () {
    console.log(this.loading)
    this.loading = true
    console.log(this.loading)
    this.imgElement.src = (this.list[this.currentIndex] || {}).url
  }
}