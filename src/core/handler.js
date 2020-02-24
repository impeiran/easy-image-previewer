import dom from '../util/dom'

export default {
  show (option) {
    if (!this.mounted || !dom(`#${this.id}`)) {
      this._mount()
    }

    if (this.showing) {
      return
    }

    
    this.showing = true
    return this
  },

  close () {
    this.showing = false
    return this;
  },

  prev () {

  },

  next () {

  },

  _view (index) {

  }
}