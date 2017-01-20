import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, Navigator} from 'react-native';
import CompListViewWithFetch from './CompListViewWithFetch'
import CompListDetail from './CompListDetail'


export const routes = [
    {
        title: 'First Scene',
        index: 0
    },
    {
        title: 'Second Scene',
        index: 1
    }
]

export default class CompNavigator extends Component {


  render() {
    return (
        <Navigator
            initialRoute={routes[0]}
            renderScene={this.renderScene}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
            />
    )
  }

  renderScene(route, navigator) {
      console.log("renderScene:" + route.title)
      switch(route.index) {
          case 0:
            return (
                <CompListViewWithFetch navigator={navigator}/>
            )
          case 1:
            return (
                <CompListDetail user={route.user} navigator={navigator} message="message"/>
             )
      }
  }
}

AppRegistry.registerComponent("CompNavigator", () => CompNavigator)