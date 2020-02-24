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

/**
 * check if target is empty
 * @param {Any} target 
 */
const isEmpty = function (target) {
  return [Object, Array].indexOf((
      typeof target == 'number' ? target : target || {}
    ).constructor) > -1 &&
    !Object.keys((target || {})).length;
};

/**
 * iterate object
 * @param {object array array-like} target 
 * @param {function} cb 
 * @param {number} startIndex 
 */
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

/**
 * assign object
 */
const assign = function () {
  const result = arguments[0]
  forEach(arguments, object => {
    Object.keys(object).forEach(key => {
      result[key] = object[key]
    })
  }, 1)
  return result;
}

/**
 * bind context into taget
 * @param {function} target
 * @param {object} context 
 */
const bind = function (target, context) {
  return function wrap () {
    return target.apply(context, arguments)
  }
}

export default {
  isEmpty,
  isNumber,
  isFunction,
  forEach,
  assign,
  bind
}