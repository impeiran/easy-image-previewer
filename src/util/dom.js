import util from '.'

/**
 * get element
 * @param {string} selector 
 */
const dom = selector => {
  return selector.indexOf('#') == 0
    ? document.getElementById(selector.slice(1))
    : document.querySelector(selector)
}

export default dom

/**
 * create an element
 * @param {string} tagName
 * @param {object} attrs 
 * @param {string} inner 
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
 * @param {string} value 
 */
export const addClass = (el, value) => {
  if (el.length) {
    util.forEach(el, element => {
      addClass(element, value)
    })
    return el
  }

  if (el.classList) {
    el.classList.add(value)
    return el
  }

  const className = el.className.trim()

  if (!className) {
    el.className = value
  } else if (className.indexOf(value) == -1) {
    el.className = className + ' ' + value
  }

  return el
}

/**
 * remove className from element
 * @param {element} el
 * @param {string} value 
 */
export const removeClass = (el, value) => {
  if (el.length) {
    util.forEach(el, element => {
      removeClass(element, value)
    })
    return el
  }

  if (el.classList) {
    el.classList.remove(value)
    return el
  }

  const className = el.className.trim()

  if (className && className.indexOf(value) !== -1) {
    el.className = className.replace(value, '')
  }

  return el
}

/**
 * listen event on target element(s)
 * @param {element} target
 * @param {string} type
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