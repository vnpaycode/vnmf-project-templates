<%if (locals.typescript) {-%>
import { ComponentType } from 'react'
import Vnmf, { Component, Config } from '@vnxjs/vnmf'
<%} else { -%>
import Vnmf, { Component } from '@vnxjs/vnmf'
<%}-%>
import { View, Button, Text } from '@vnxjs/components'
import { observer, inject } from '@vnxjs/mobx'

import './<%= pageName %>.<%= cssExt %>'

<%if (locals.typescript) {-%>
type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface <%= _.capitalize(pageName) %> {
  props: PageStateProps;
}
<%}-%>

@inject('counterStore')
@observer
class <%= _.capitalize(pageName) %> extends Component {

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

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='<%= pageName %>'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default <%= _.capitalize(pageName) %> <%if (locals.typescript) {%> as ComponentType<%}%>
