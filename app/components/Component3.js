import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {TextInput} from 'react-native'

export default class Component3 extends Component {

    constructor() {
        super()
        this.state = {
            textValue: "Braden"
        }
    }

    onChangeText(value) {
        console.log(value)
        this.setState({
            textValue: value
        })
    }

    onSubmitEditing() {
        console.log("onSubmitEditing:" + this.state.textValue)
    }

  render() {
    return (
      <View>
        <Text>Component 3</Text>
        <TextInput placeholder="Enter text"
            value={this.state.textValue}
            onChangeText={(value) => this.onChangeText(value)}
            onSubmitEditing={this.onSubmitEditing.bind(this)}/>
        <Text>{this.state.textValue}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent("Component3", () => Component3)