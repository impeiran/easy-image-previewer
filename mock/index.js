import previewer from '..'

const trigger = () => {
  previewer([
    { 
      title: 'avatar',
      url: 'https://avatars3.githubusercontent.com/u/32994681?s=460&v=4'
    }, {
      title: 'home',
      url: 'https://www.baidu.com/img/pcpad_20b426f0af2c7ce8fb79ee4200a0e13e.png'
    }
  ])
}

const button = document.createElement('button')
button.innerText = '预览图片'
button.onclick = trigger

document.body.append(button)

// trigger()

