import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default class Expenses extends React.Component {
  constructor() {
    super();
  }
  formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  render() {
    return (
      <SafeAreaView style={styles.windowWrapper}>
        <View style={styles.headerSection}>
          <Image style={styles.topLogo} />
          <View style={styles.balanceWrapper}>
            <Text style={styles.largeDigits}>{this.formatNumber(12355)}</Text>
            <Text style={styles.smallText}>Small text</Text>
          </View>
          <TouchableOpacity onPress={() => alert('Menu')}>
            <Text style={styles.menuIcon}>:</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chartWrapper}>
          <View style={styles.chartPlaceholder}>
            <Text style={[styles.smallText]}>October</Text>
            <Text style={[styles.largeDigits]}>{this.formatNumber(578662)}</Text>
            <Text style={[styles.smallText]}>of {this.formatNumber(2451133)}</Text>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={[styles.userInfoRow, styles.userInfoRow1]}>
            <View style={[styles.userInfo, styles.userInfoBorder]}>
              <Text style={[styles.largeDigits]}>{this.formatNumber(4312)}</Text>
              <Text style={[styles.smallText]}>Some small text</Text>
            </View>
            <View style={[styles.userInfo]}>
              <Text style={[styles.largeDigits]}>{this.formatNumber(4312)}</Text>
              <Text style={[styles.smallText]}>Some small text</Text>
            </View>
          </View>
          <View style={[styles.userInfoRow, styles.userInfoRow2]}>
            <View style={[styles.userInfo, styles.userInfoBorder]}>
              <Text style={[styles.largeDigits]}>{this.formatNumber(4312)}</Text>
              <Text style={[styles.smallText]}>Some small text</Text>
            </View>
            <View style={[styles.userInfo]}>
              <Text style={[styles.largeDigits]}>{this.formatNumber(4312)}</Text>
              <Text style={[styles.smallText]}>Some small text</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerSection}>
          <TouchableOpacity onPress={() => alert('clicked')}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerAddBtn} onPress={() => alert('clicked')}>
            <Text style={{ color: 'white', fontSize: 26 }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('clicked')}>
            <Text>2</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  windowWrapper: {
    flex: 1
  },
  headerSection: {
    height: 70,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10
  },
  chartWrapper: {
    flex: 3,
    justifyContent: 'center'
  },
  chartPlaceholder: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 8,
    borderColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userInfoSection: {
    flex: 4,
    padding: 20
  },
  userInfoRow: {
    flex: 1,
    flexDirection: 'row'
  },
  userInfoRow1: {
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  userInfoBorder: {
    borderRightWidth: 1,
    borderColor: '#EEEEEE'
  },
  userInfo: {
    flex: 1,
    alignItems: 'center',
    minHeight: 100,
    justifyContent: 'center'
  },
  largeDigits: {
    fontSize: 25,
    color: '#353535'
  },
  smallText: {
    fontSize: 14,
    color: '#777777'
  },
  topLogo: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 10
  },
  balanceWrapper: {},
  menuIcon: {
    fontSize: 30,
    fontWeight: '700'
  },
  footerSection: {
    height: 80,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerAddBtn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
