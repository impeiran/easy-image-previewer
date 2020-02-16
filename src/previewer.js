import Previewer from './core/Previewer'
import util from './util'

function createInstance (config) {
  const context = new Previewer(config)

  const instance = util.bind(Previewer.prototype.show, context)

  return instance
}

let previewer = createInstance({})

previewer.create = createInstance

export default previewer
