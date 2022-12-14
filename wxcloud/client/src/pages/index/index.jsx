<%if (locals.typescript) {-%>
import Vnmf, { Component, Config } from '@vnxjs/vnmf'
<%} else { -%>
import Vnmf, { Component } from '@vnxjs/vnmf'
<%}-%>
import { View, Text } from '@vnxjs/components'
import './<%= pageName %>.<%= cssExt %>'

import Login from '../../components/login/index'

export default class <%= _.capitalize(pageName) %> extends Component {

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
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='<%= pageName %>'>
        <Login/>
      </View>
    )
  }
}
