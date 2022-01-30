import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from '../../utils/colors';

interface TileProps {
  props?: ViewStyle;
  icon?: JSX.Element;
  onTilePress?: () => void;
}

const styles = StyleSheet.create({
  tile: {
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderWidth: 1.5,
    borderColor: colors.grey,
    alignItems: 'center',
  },
});

const Tile = ({props, icon, onTilePress}: TileProps) => {
  return (
    <TouchableOpacity style={[styles.tile, props]} onPress={onTilePress}>
      {icon}
    </TouchableOpacity>
  );
};

export default Tile;
