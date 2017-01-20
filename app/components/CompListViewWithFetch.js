import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {ListView} from 'react-native'
import {routes} from './CompNavigator'

export default class CompListViewWithFetch extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: ds
    }
  }

  fetchUsers() {
    console.log("fetch Users")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data)
        })
      })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  renderRow(data, sectionId, rowId) {
    return (
      <TouchableHighlight onPress={this.onPressRow.bind(this, data)}>
        <View style={styles.row}>
          <Text style={styles.rowText}>{data.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  onPressRow(data) {
    console.log('onPressRow:' + data)
    this.props.navigator.push({
      title: 'List Detail',
      index: 1,
      user: data
    })
  }

  render() {
    return (
      <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}/>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
})

AppRegistry.registerComponent("CompListViewWithFetch", () => CompListViewWithFetch)