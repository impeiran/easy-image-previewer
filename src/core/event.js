import util from '../util'
import { listen } from '../util/dom'

export default {
  _initEvent () {
    const listener = {}

    listener.prevButton = listen(
      this.toolbar.querySelector('li[data-action=left]'),
      'click',
      util.bind(this.prev, this)
    )

    listener.prevButton = listen(
      this.toolbar.querySelector('li[data-action=right]'),
      'click',
      util.bind(this.next, this)
    )

    listener.closeButton = listen(
      this.corner,
      'click',
      util.bind(this.close, this)
    )

    listener.loadImg = listen(
      this.board.querySelector('img'),
      'load',
      (e) => {
        console.log(e.target)
        const img = e.target
        console.log(img.width)
        console.log(img.height)
        this.loading = false
      }
    )

    this.listener = listener
  }
}