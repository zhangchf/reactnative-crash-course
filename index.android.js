import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native'
import Component1 from './app/components/Component1/Component1'
import Component2 from './app/components/Component2/Component2'

export default class MyApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello MyApp</Text>
        <Component1 />
        <Component2 />
      </View>
    )
  }
}

AppRegistry.registerComponent("myapp", () => MyApp)