import React from 'react';
import { View, Text } from 'react-native';

export default class Income extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 22, }}>Hey From Income</Text>
      </View>
    );
  }
}
