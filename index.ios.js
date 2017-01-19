import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native'

export default class MyApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello MyApp</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent("myapp", () => MyApp)