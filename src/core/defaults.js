const noop = () => {}

const genLabel = data => {
  return data.name
}

export default {
  mount: document.body,

  loop: true,

  label: genLabel,
  showLabel: false,

  showToolBar: true,
  showToolBarAnimation: false,

  lockScroll: true,

  onShow: noop,
  onChange: noop,
  onClose: noop
}