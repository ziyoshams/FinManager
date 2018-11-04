import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Welcome extends React.Component {
  constructor() {
    super();
  }

  handleSignUp = () => {
    alert('helo');
  }

  handleTerms = () => {
    alert('Terms and services')
  }

  render() {
    return (
      <View style={styles.welcome}>
        <Image style={styles.backgroundImage} source={require('../assets/Welcome-view/Welcome.png')} />
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Image source={require('../assets/Welcome-view/button-sign-up.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleTerms} style={styles.terms}>
          <Text style={styles.termsText}>Terms of Services</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: '#33001B'
  },
  backgroundImage: {
    flex: 1
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 220,
  },
  terms: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  termsText: {
    color: '#B0B0B0',
    fontSize: 12
  }
})