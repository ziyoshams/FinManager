import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import firebase from 'react-native-firebase';

const viewport = Dimensions.get('window');

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // if the user is already logged in
      // navigate to Expenses page
  }

  handleSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleTerms = () => {
    alert('Terms and services');
  };

  handleContinue = async () => {
    try {
      const user = await firebase.auth().signInAnonymously();
      // set user in redux store and maybe AsyncStorage
      this.props.navigation.navigate('Expenses')
    } catch (error) {
      console.log('ERROR Anonymous sign in', error);
    }
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
    backgroundColor: 'red'
  },
  buttonText: {
    fontSize: 18,
    color: '#3867d6',
    fontWeight: '600'
  },
  backgroundImage: {
    position: 'absolute',
    height: viewport.height,
    width: viewport.width
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
