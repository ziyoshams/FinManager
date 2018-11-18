import React from 'react';
import { View, Text } from 'react-native';

export default class Expenses extends React.Component {
 

  constructor() {
    super();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 22, }}>Hey From Expenses</Text>
      </View>
    );
  }
}
