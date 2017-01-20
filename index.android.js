import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3';

export default class MyApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello MyApp</Text>
        <Component1 />
        <Component2 />
        <Component3 />
      </View>
    )
  }
}

AppRegistry.registerComponent("myapp", () => MyApp)