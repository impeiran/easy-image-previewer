import util from '.'

/**
 * get element
 * @param {string} selector 
 */
const dom = selector => {
  return selector.indexOf('#') == 0
    ? document.getElementById(selector)
    : document.querySelector(selector)
}

export default dom

/**
 * add className to element
 * @param {element} el
 * @param {string} value 
 */
export const addClass = (el, value) => {
  if (el.length) {
    util.forEach(el, element => {
      addClass(element, value)
      return
    })
  }

  if (el.classList) {
    el.classList.add(value)
    return
  }

  const className = el.className.trim()

  if (!className) {
    el.className = value
  } else if (className.indexOf(value) == -1) {
    el.className = className + ' ' + value
  }
}