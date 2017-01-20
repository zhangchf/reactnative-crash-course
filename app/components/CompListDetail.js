import React, {Component} from 'react';
import {AppRegistry, View, Text, Button} from 'react-native'

export default class CompListDetail extends Component {
    constructor(props) {
        super(props)
        console.log(props.user)
        this.state = {
            name: props.user.name,
            email: props.user.email,
        }
    }

    static defaultProps = {
        name: 'chaofan',
        email: 'none'
    }

    onPressBack() {
      console.log("CompListDetail back pressed")
      this.props.navigator.pop()
    }

  render() {
      console.log("CompListDetail render")
    return (
      <View>
        <Text>{this.state.name}</Text>
        <Text>{this.state.email}</Text>

        <Button title="Back" onPress={this.onPressBack.bind(this)}/>

      </View>
    )
  }
}

AppRegistry.registerComponent("CompListDetail", () => CompListDetail)