<%if (locals.typescript) {-%>
import Vnmf, { Component, Config } from '@vnxjs/vnmf'
<%} else { -%>
import Vnmf, { Component } from '@vnxjs/vnmf'
<%}-%>
import Index from './pages/index'

import './app.<%= cssExt %>'

class App extends Component {

<%if (locals.typescript) {-%>
  /**
   * 指定config的类型声明为: Vnmf.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
<%}-%>
  config<%if (locals.typescript) {%>: Config<%}%> = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "plugins": {
      "myPlugin": {
        "version": "dev",
        "provider": "touristappid"
      }
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Vnmf.render(<App />, document.getElementById('app'))
