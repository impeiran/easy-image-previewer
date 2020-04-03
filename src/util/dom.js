import util from '.'

/**
 * get element
 * @param {String} selector 
 */
const dom = selector => {
  return selector.indexOf('#') == 0
    ? document.getElementById(selector.slice(1))
    : document.querySelector(selector)
}

export default dom

/**
 * create an element
 * @param {String} tagName
 * @param {object} attrs 
 * @param {String} inner 
 */
export const createEl = (tagName, attrs, inner) => {
  const el = document.createElement(tagName)
  Object.keys(attrs).forEach(k => {
    el[k] = attrs[k]
  })
  el.innerHTML = inner
  return el
}

/**
 * add className to element
 * @param {element} el
 * @param {String} className 
 */
export const addClass = (el, className) => {
  if (el.length) {
    util.forEach(el, element => {
      addClass(element, className)
    })
    return el
  }

  el.classList.add(className)
  return el
}

/**
 * remove className from element
 * @param {element} el
 * @param {String} className 
 */
export const removeClass = (el, className) => {
  if (el.length) {
    util.forEach(el, element => {
      removeClass(element, className)
    })
    return el
  }

  el.classList.remove(className)
  return el
}

/**
 * toggle className
 * @param {Element} el 
 * @param {String} className 
 * @param {Boolean} status?
 */
export const toggleClass = (el, className, status) => {
  if (typeof status === 'undefined') {
    status = !el.classList.contains(className)
  }
  status ? addClass(el, className) : removeClass(el, className)
}

/**
 * listen event on target element(s)
 * @param {element} target
 * @param {String} type
 * @param {function} callback
 */
export const listen = function (target, type, callback) {
  if (target.length) {
    Array.prototype.forEach.call(target, item => {
      item.addEventListener(type, callback)
    })
    return {
      destory: function () {
        Array.prototype.forEach.call(target, item => {
          item.removeEventListener(type, callback)
        })
      }
    }
  } else {
    target.addEventListener(type, callback)
    return {
      destory: function () {
        target.removeEventListener(type, callback)
      }
    }
  }
}