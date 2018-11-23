import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignUp = () => {
    this.props.navigation.navigate('SignUp')
  };

  handleTerms = () => {
    alert('Terms and services');
  };

  handleContinue = () => {
    alert('Continuing');
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/Welcome-view/Welcome.png')}
        />
        <View style={{ flex: 1 }} />
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.signUpBtn} onPress={this.handleSignUp}>
            <Image source={require('../assets/Welcome-view/button-sign-up.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueBtn} onPress={this.handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleTerms} style={styles.termsBtn}>
            <Text style={styles.termsText}>Terms of Services</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#33001B'
  },
  buttonText: {
    fontSize: 18,
    color: '#3867d6',
    fontWeight: '600'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  signUpBtn: {
    marginTop: 80,
    flex: 1,
    alignSelf: 'center'
  },
  continueBtn: {
    flex: 3,
    alignSelf: 'center'
  },
  termsBtn: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center'
  },
  termsText: {
    color: '#B0B0B0',
    fontSize: 12
  }
});
