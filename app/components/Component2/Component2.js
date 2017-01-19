import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native'

export default class Component2 extends Component {
  render() {
    return (
      <View style={styles.myView}>
        {/* inline style */}
        <Text style={{color: 'red'}}>Hello Component2</Text>
        {/* stylesheet style*/}
        <Text style={styles.myText}>Line 2</Text>
        <View style={styles.flexContainer}>
            <View style={styles.flexV1}>
                <Text>Flex View 1</Text>
            </View>
            <View style={styles.flexV2}>
                <Text>Flex View 1</Text>
            </View>
            <View style={styles.flexV3}>
                <Text>Flex View 3</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'black'
    },
    myText: {
        backgroundColor: 'blue',
        color: 'white'
    },
    flexContainer: {
        flexDirection: 'row',
        height: 100
    },
    flexV1: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },
    flexV2: {
        flex: 2,
        backgroundColor: 'yellow',
        padding: 20
    },
    flexV3: {
        flex: 1,
        backgroundColor: 'cyan',
        padding: 10
    }
})

AppRegistry.registerComponent("Component2", () => Component2)