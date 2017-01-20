import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {ListView} from 'react-native'

const users = [
  {name: "Alfred"},
  {name: "Benjamin"},
  {name: "Churchill"},
  {name: "Daniel"},
  {name: "Emma"},
  {name: "Frank"},
  {name: "Gabriel"},
  {name: "Herbert"},
  {name: "Icecream"},
  {name: "Jack"},
  {name: "Kelly"}
]

export default class CompListView extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: ds.cloneWithRows(users)
    }
  }

  renderRow(data, sectionId, rowId) {
    return (
      <View>
        <Text>{data.name}</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}/>
    )
  }
}

AppRegistry.registerComponent("CompListView", () => CompListView)