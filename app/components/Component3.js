import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {TextInput, Switch} from 'react-native'

export default class Component3 extends Component {

    constructor() {
        super()
        this.state = {
            textValue: "Braden",
            switchValue: true
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

    onSwitchValueChange(value) {
        this.setState({
            switchValue: value
        }, () => {
            console.log(this.state)
        })
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

        <Switch value={this.state.switchValue} onValueChange={(value)=>this.onSwitchValueChange(value)}/>
        <Switch value={this.state.switchValue} onValueChange={this.onSwitchValueChange.bind(this)}/>
        <Switch value={this.state.switchValue} onValueChange={(value)=>{this.setState({switchValue: value})}}/>
      </View>
    )
  }
}

AppRegistry.registerComponent("Component3", () => Component3)