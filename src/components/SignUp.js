import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.inputArea}>
          <TouchableOpacity style={[styles.btn, styles.googleBtn]}>
            <Text style={[styles.text, styles.googleText]}> Google </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.facebookBtn]}>
            <Text style={[styles.text, styles.facebookText]}> Facebook </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  btn:{
    margin: 5,
    height: 60,
    width: '80%',
    borderRadius: 50,
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
  facebookBtn: {
    backgroundColor: '#3b5998'
  },
  facebookText: {
    color: '#FFFFFF'
  },
  googleBtn: {
    backgroundColor: '#FFFFFF'
  },
  googleText: {
    color: '#000000'
  }
});
