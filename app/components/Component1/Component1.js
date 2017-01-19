import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native'

export default class Component1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Chaofan",
            showName: false,
            message: this.props.message
        }
    }

    static defaultProps = {
        message: 'Hi There'
    }
  render() {
      console.log("Component1 render")
      let name = this.state.showName ? this.state.name : 'anonymous'
    return (
      <View>
        <Text>This is Component1</Text>
        <Text>{this.props.message} {name}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent("Component1", () => Component1)