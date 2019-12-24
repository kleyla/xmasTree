import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';

import {theme} from './constants/index';

// Detect screen size
const {width, height} = Dimensions.get('window');
const letterSize = height * 0.05;
export default class CerosUnos extends Component {
  render() {
    return (
      <View style={styles.rows}>
        {/* 1 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            0
          </Text>
        </View>
        {/* 2 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            10
          </Text>
        </View>
        {/* 3 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            001
          </Text>
        </View>
        {/* 4 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            1001
          </Text>
        </View>
        {/* 5 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            10010
          </Text>
        </View>
        {/* 6 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            101101
          </Text>
        </View>
        {/* 7 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            1000110
          </Text>
        </View>
        {/* 8 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            10010111
          </Text>
        </View>
        {/* 9 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            1010 - 0010
          </Text>
        </View>
        {/* 10 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            0000010011
          </Text>
        </View>
        {/* 11 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            10011000010
          </Text>
        </View>
        {/* 12 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            111011001101
          </Text>
        </View>
        {/* 13 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            0010110010001
          </Text>
        </View>
        {/* 14 */}
        <View style={styles.row}>
          <Text
            style={{
              color: theme.colors.yellow03,
              fontSize: letterSize,
              fontWeight: 'bold',
            }}>
            10000101100100
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rows: {
    flexDirection: 'column',
    marginTop: height * 0.08,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    // width: width,
    // height: height * 0.9,
  },
});
