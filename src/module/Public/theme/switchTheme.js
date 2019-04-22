import { defaultTheme, wathetTheme } from './index'

const switchTheme = (theme) => {
    var head = document.getElementsByTagName('head')[0]
    var style = document.createElement('style')
    style.type = 'text/css'
    switch (theme) {
        case 'default' : style.innerText = defaultTheme; break
        case 'wathet' : style.innerText = wathetTheme; break
        default : return
    }
    head.appendChild(style)
}

export default switchTheme