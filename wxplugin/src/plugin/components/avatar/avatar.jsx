import Vnmf, { Component } from '@vnxjs/vnmf'
import { View, Image } from '@vnxjs/components'
import './avatar.<%= cssExt %>'

export default class Avatar extends Component {
  render () {
    return (
      <View>
        <Image src='http://storage.360buyimg.com/vnmf-static/static/images/logo.png' />
      </View>
    )
  }
}
