import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CircleIcon, CrossIcon} from '../../assets/icon/icon';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerOneText: {
    fontWeight: '800',
    marginLeft: 10,
    width: 80,
    color: colors.xiconColor,
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  playerTwoText: {
    fontWeight: '800',
    marginLeft: 10,
    color: colors.oIconColor,
    fontSize: 18,
    marginTop: 8,
    width: 80,
    textAlign: 'center',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <CrossIcon height={18} width={18} />
        <Text style={styles.playerOneText}>sairaj</Text>
      </View>
      <View
        style={{flexDirection: 'column', alignItems: 'center', marginLeft: 10}}>
        <CircleIcon height={20} width={20} />
        <Text style={styles.playerTwoText}>shawn</Text>
      </View>
    </View>
  );
};

export default Header;
