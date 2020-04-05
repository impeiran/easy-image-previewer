import util from '../util'
import { setStyle, listen } from '../util/dom'

// calc img size to display
const calcSize = (width, height, maxWidth, maxHeight) => {
  console.log(width, height)
  console.log(maxWidth, maxHeight)
  if (width > maxWidth || height > maxHeight) {
    const curRatio = width / height
    // console.log(curRatio, ratio)
    if (width > maxWidth) {
      width = maxWidth
      height = Math.floor(width / curRatio)
    } else {
      height = maxHeight
      width = Math.floor(height * curRatio)
    }
  }
  return { width, height }
}

export default {
  _initEvent () {
    const listener = {}
    // show prev image
    listener.prevButton = listen(
      this.toolbar.querySelector('li[data-action=left]'),
      'click',
      util.bind(this.prev, this)
    )
    // show next image
    listener.nextButton = listen(
      this.toolbar.querySelector('li[data-action=right]'),
      'click',
      util.bind(this.next, this)
    )
    // close previewer
    listener.closeButton = listen(this.corner, 'click', util.bind(this.close, this))

    // image loaded
    listener.loadImg = listen(this.imgElement, 'load', (e) => {
      const img = e.target
      const { width, height } = calcSize(
        img.width, img.height, this.maxWidth, this.maxHeight
      )

      setStyle(img, {
        'margin-left': `-${width / 2}px`,
        'margin-top': `-${height / 2}px`,
        'width': `${width}px`,
        'height': `${height}px`,
        'animation': 'zoomIn .3s'
      })

      this.loadingTimer && clearTimeout(this.loadingTimer)
      this.loading = false
    })

    this.listener = listener
  }
}