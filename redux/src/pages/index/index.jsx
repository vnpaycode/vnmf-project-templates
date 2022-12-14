<%if (locals.typescript) {-%>
import { ComponentClass } from 'react'
import Vnmf, { Component, Config } from '@vnxjs/vnmf'
<%} else { -%>
import Vnmf, { Component } from '@vnxjs/vnmf'
<%}-%>
import { View, Button, Text } from '@vnxjs/components'
import { connect } from '@vnxjs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './<%= pageName %>.<%= cssExt %>'

<% if (locals.typescript) {-%>
// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Vnmf.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Vnmf.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface <%= _.capitalize(pageName) %> {
  props: IProps;
}
<%}-%>

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
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

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='<%= pageName %>'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

<%if (locals.typescript) {-%>
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Vnmf.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default <%= _.capitalize(pageName) %> as ComponentClass<PageOwnProps, PageState>
<%} else {-%>
export default <%= _.capitalize(pageName) %>
<%}-%>
