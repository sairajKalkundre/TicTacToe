import React from 'react';
import {ImageStyle, StyleSheet, View} from 'react-native';
import {colors} from '../../utils/colors';

interface TileProps {
  props?: ImageStyle;
}

const styles = StyleSheet.create({
  tile: {height: 100, width: 100, borderWidth: 5, borderColor: colors.grey},
});

const Tile = ({props}: TileProps) => {
  return <View style={[styles.tile, props]} />;
};

export default Tile;
