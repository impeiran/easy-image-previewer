import previewer from '..'

const trigger = () => {
  previewer([
    { 
      title: 'avatar',
      url: '//static.cnodejs.org/Fg4dIjPNKksKiOMmyIgGMEg1087O'
    }, {
      title: 'home',
      url: '//static.cnodejs.org/Fh7MgA9zXpT3Gc-1UfXsd3o8FB6F'
    }
  ])
}

const button = document.createElement('button')
button.innerText = '预览图片'
button.onclick = trigger

document.body.appendChild(button)

trigger()

