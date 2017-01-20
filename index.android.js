import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';
import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3';
import CompListView from './app/components/CompListView'
import CompListViewWithFetch from './app/components/CompListViewWithFetch'
import CompNavigator from './app/components/CompNavigator'

export default class MyApp extends Component {
  render() {
    return (
      // <View>
      //   <Text>Hello MyApp</Text>
      //   <View style={styles.dividerLine}/>
      //   <Component1 />
      //   <View style={styles.dividerLine}/>
      //   <Component2 />
      //   <View style={styles.dividerLine}/>
      //   <Component3 />
      //   <View style={styles.dividerLine}/>
      //   <CompListView/>
      //   <CompListViewWithFetch/>
      // </View>

      <CompNavigator/>
    )
  }
}

const styles = StyleSheet.create({
  dividerLine: {
    height: 1,
    backgroundColor: 'black',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    marginBottom: 5
  }
})

AppRegistry.registerComponent("myapp", () => MyApp)