/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Tile from './src/components/Tile';
import {CircleIcon, CrossIcon} from './src/assets/icon/icon';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CrossIcon />

      <CircleIcon />

      <View style={{flexDirection: 'row'}}>
        <Tile props={styles.leftTopTileStyle}></Tile>
        <Tile props={styles.middleTopTileStyle} />
        <Tile props={styles.rightTopTileStyle} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Tile props={styles.centerLeftTileStyle} />
        <Tile />
        <Tile props={styles.centerRightTileStyle} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Tile props={styles.bottomLeftTileStyle} />
        <Tile props={styles.bottomMiddleTileStyle} />
        <Tile props={styles.bottomRightTileStyle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  leftTopTileStyle: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  middleTopTileStyle: {borderTopWidth: StyleSheet.hairlineWidth},
  rightTopTileStyle: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  centerLeftTileStyle: {borderLeftWidth: StyleSheet.hairlineWidth},
  centerRightTileStyle: {borderRightWidth: StyleSheet.hairlineWidth},
  bottomLeftTileStyle: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bottomMiddleTileStyle: {borderBottomWidth: StyleSheet.hairlineWidth},
  bottomRightTileStyle: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconStyle: {
    height: 10,
    width: 10,
  },
});
export default App;
