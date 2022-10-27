import Vnmf, { Component } from '@vnxjs/vnmf'
import { View } from '@vnxjs/components'
import ListItem from '../../components/listItem/listItem'
import './<%= pageName %>.<%= cssExt %>'

export default class <%= _.capitalize(pageName) %> extends Component {
  state = {
    list: [{
      name: 'A',
      value: '1'
    }, {
      name: 'B',
      value: '2'
    }, {
      name: 'C',
      value: '3'
    }]
  }

  render () {
    return (
      <View>
        {this.state.list.map(item => {
          return <ListItem name={item.name} value={item.value} key={item.name} />
        })}
      </View>
    )
  }
}
