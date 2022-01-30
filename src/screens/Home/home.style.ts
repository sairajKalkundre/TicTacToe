import {
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {colors} from '../../utils/colors';

interface Style {
  resultTextStyle: TextStyle;
  newGameContainer: TouchableOpacityProps;
  newGameTextStyle: TextStyle;
  footerContainer: ViewStyle;
  leftTopTileStyle: ViewStyle;
  middleTopTileStyle: ViewStyle;
  rightTopTileStyle: ViewStyle;
  centerLeftTileStyle: ViewStyle;
  centerRightTileStyle: ViewStyle;
  bottomLeftTileStyle: ViewStyle;
  bottomMiddleTileStyle: ViewStyle;
  bottomRightTileStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  resultTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    top: 3,
    color: colors.darkGrey,
  },
  newGameContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    height: 35,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.grey,
    borderRadius: 25,
  },
  newGameTextStyle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  leftTopTileStyle: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  middleTopTileStyle: {borderTopWidth: 0},
  rightTopTileStyle: {
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  centerLeftTileStyle: {borderLeftWidth: 0},
  centerRightTileStyle: {borderRightWidth: 0},
  bottomLeftTileStyle: {
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomMiddleTileStyle: {borderBottomWidth: 0},
  bottomRightTileStyle: {
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
});
