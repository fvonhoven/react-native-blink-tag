import React, { PureComponent } from 'react'
import { StyleSheet, Animated } from 'react-native'

export default class Blink extends PureComponent {
  constructor (props) {
    super(props)
    this.opacityValue = new Animated.Value(0)
    this.opacityValue.setValue(0)
    Animated.loop(
      Animated.timing(
        this.opacityValue,
        {
          toValue: 0.5,
          duration: 300
        }
      )
    ).start()
  }

  render () {
    const opacity = this.opacityValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0, 1]
    })
    return (
      <Animated.View style={[styles.blinkLabel, this.props.style, {opacity}]}>
        {this.props.children}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  blinkLabel: {
    fontSize: 14,
    color: '#333333'
  }
})
