/**
 * check if target is function
 * @param {Any} target 
 */
const isFunction = function (target) {
  return typeof target === 'function'
}

/**
 * check if target is number
 * @param {Any} target 
 */
const isNumber = function (target) {
  return typeof target === 'number' && target !== NaN
}

/**
 * check if target is object
 * @param {object} target 
 */
const isObject = function (target) {
  return typeof target === 'object' && target !== null
}

const forEach = function (target, cb, startIndex) {
  if (target && isFunction(cb)) {
    if (Array.isArray(target) || target.length) {
      let len = target.length

      startIndex = startIndex || 0
      for (let i = startIndex; i < len; i++) {
        if (cb.call(target, target[i], i, target) === false) {
          break;
        }
      }
    } else if (isObject(target)) {
      Object.keys(target).forEach((k) => {
        cb.call(target, k, target[k], target)
      })
    }
  }
}

const assign = Object.assign || function () {
  const result = arguments[0]
  forEach(arguments, object => {
    forEach(object, (key, value) => {
      result[key] = value
    })
  }, 1)
  return result;
}

const bind = function (target, context) {
  return function wrap () {
    const args = new Array(arguments.length)
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    return target.apply(context, args)
  }
}

export default {
  isNumber,
  isFunction,
  forEach,
  assign,
  bind
}