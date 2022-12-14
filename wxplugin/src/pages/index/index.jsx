<%if (locals.typescript) {-%>
import Vnmf, { Component, Config } from '@vnxjs/vnmf'
<%} else { -%>
import Vnmf, { Component } from '@vnxjs/vnmf'
<%}-%>
import { View, Text, Navigator } from '@vnxjs/components'
import './index.<%= cssExt %>'

const myPluginInterface = Vnmf.requirePlugin('myPlugin')

export default class Index extends Component {

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
    navigationBarTitleText: '首页',
    usingComponents: {
      'avatar': 'plugin://myPlugin/avatar'
    }
  }

  componentWillMount () {
    myPluginInterface.sayHello()
    const answer = myPluginInterface.answer
    console.log('answer: ', answer)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Avatar />
        <Navigator url='plugin://myPlugin/list'>
          Go to pages/list!
        </Navigator>
      </View>
    )
  }
}
