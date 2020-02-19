export const NAMESPACE = 'easy-previewer'

export const CLASS_NAME_VISIBLE = `${NAMESPACE}--visible`
export const CLASS_NAME_HIDE = `${NAMESPACE}--hide`
export const CLASS_NAME_CORNER = `${NAMESPACE}__corner`
export const CLASS_NAME_INDICATOR = `${NAMESPACE}__indicator`
export const CLASS_NAME_BOARD = `${NAMESPACE}__board`
export const CLASS_NAME_FOOTER = `${NAMESPACE}__footer`
export const CLASS_NAME_BTN_CLOSE = `${NAMESPACE}__btn-close`
export const CLASS_NAME_TOOLBAR = `${NAMESPACE}__toolbar`

export const TEMPLATE = `
  <div class="${CLASS_NAME_CORNER}">
    <span class="${CLASS_NAME_BTN_CLOSE}" role="button">×</span>
  </div>
  <div class="${CLASS_NAME_INDICATOR}"></div>
  <div class="${CLASS_NAME_BOARD}"></div>
  <div class="${CLASS_NAME_FOOTER}">
    <ul class="${CLASS_NAME_TOOLBAR}">
      <li data-action="left" class="easy-previewer__tool-item"></li>
      <li data-action="rotate-left" class="easy-previewer__tool-item"></li>
      <li data-action="rotate-right" class="easy-previewer__tool-item"></li>
      <li data-action="right" class="easy-previewer__tool-item"></li>
    </ul>
  </div>
`