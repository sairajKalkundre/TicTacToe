/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import Tile from './src/components/Tile';
import {CircleIcon, CrossIcon} from './src/assets/icon/icon';

const App = () => {
  const [tileState, setTileState] = useState<Number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);

  const showIcon = (row: number, col: number) => {
    let value = tileState[row][col];
    switch (value) {
      case 1:
        return <CrossIcon />;
      case -1:
        return <CircleIcon />;
      default:
        return <View />;
    }
  };

  const checkWinner = (): number => {
    let tileArr = tileState.slice();
    //Row check
    let check;
    for (let i = 0; i < 3; i++) {
      // @ts-ignore
      check = tileArr[0][i] + tileArr[1][i] + tileArr[2][i];
      if (check === 3) {
        return 1;
      } else if (check === -3) {
        return -1;
      }
    }
    //Column Check
    for (let i = 0; i < 3; i++) {
      // @ts-ignore
      check = tileArr[i][0] + tileArr[i][1] + tileArr[i][2];
      if (check === 3) {
        return 1;
      } else if (check === -3) {
        return -1;
      }
    }

    //diagonal check
    // @ts-ignore
    check = tileArr[0][0] + tileArr[1][1] + tileArr[2][2];
    if (check === 3) {
      return 1;
    } else if (check === -3) {
      return -1;
    }

    // @ts-ignore
    check = tileArr[2][0] + tileArr[1][1] + tileArr[0][2];
    if (check === 3) {
      return 1;
    } else if (check === -3) {
      return -1;
    }
    //No winners
    return 0;
  };

  const onTilePress = (row: number, col: number) => {
    let tileValue = tileState[row][col];
    if (tileValue) {
      return;
    }
    let playerOne = currentPlayer;
    let tiles = tileState.slice();
    tiles[row][col] = playerOne;
    setTileState(tiles);

    //Swapping players
    let playerTwo = currentPlayer === 1 ? -1 : 1;
    setCurrentPlayer(playerTwo);

    //checkWinner
    let winner = checkWinner();
    console.log('Winner', winner);
    if (winner === 1) {
      Alert.alert('Winner', 'Player 1 won');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Tile
          props={styles.leftTopTileStyle}
          icon={showIcon(0, 0)}
          onTilePress={() => onTilePress(0, 0)}
        />
        <Tile
          props={styles.middleTopTileStyle}
          icon={showIcon(0, 1)}
          onTilePress={() => onTilePress(0, 1)}
        />
        <Tile
          props={styles.rightTopTileStyle}
          icon={showIcon(0, 2)}
          onTilePress={() => onTilePress(0, 2)}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Tile
          props={styles.centerLeftTileStyle}
          icon={showIcon(1, 0)}
          onTilePress={() => onTilePress(1, 0)}
        />
        <Tile icon={showIcon(1, 1)} onTilePress={() => onTilePress(1, 1)} />
        <Tile
          props={styles.centerRightTileStyle}
          icon={showIcon(1, 2)}
          onTilePress={() => onTilePress(1, 2)}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Tile
          props={styles.bottomLeftTileStyle}
          icon={showIcon(2, 0)}
          onTilePress={() => onTilePress(2, 0)}
        />
        <Tile
          props={styles.bottomMiddleTileStyle}
          icon={showIcon(2, 1)}
          onTilePress={() => onTilePress(2, 1)}
        />
        <Tile
          props={styles.bottomRightTileStyle}
          icon={showIcon(2, 2)}
          onTilePress={() => onTilePress(2, 2)}
        />
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
