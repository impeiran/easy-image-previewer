export default selector => {
  return selector.indexOf('#') == 0
    ? document.getElementById(selector)
    : document.querySelector(selector)
}