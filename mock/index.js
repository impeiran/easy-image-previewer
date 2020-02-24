import previewer from '..'

const trigger = () => {
  previewer([
    { 
      title: 'avatar',
      url: 'http://img4.imgtn.bdimg.com/it/u=1762457155,50964291&fm=26&gp=0.jpg'
    }, {
      title: 'home',
      url: 'http://img2.imgtn.bdimg.com/it/u=2944839747,3135587715&fm=26&gp=0.jpg'
    }
  ])
}

const button = document.createElement('button')
button.innerText = '预览图片'
button.onclick = trigger

document.body.appendChild(button)

trigger()

