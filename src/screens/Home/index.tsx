import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Tile from '../../components/Tile';
import {
  CircleIcon,
  CrossIcon,
  CrownIcon,
  RefreshIcon,
} from '../../assets/icon/icon';
import {checkWinner} from '../../utils/helper';
import Row from '../../components/Row';
import Header from '../../components/Header';
import {colors} from '../../utils/colors';

const Home = () => {
  const [tileState, setTileState] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [winnerId, setWinnerId] = useState<string>('');

  const showIcon = (row: number, col: number): JSX.Element => {
    let value = tileState[row][col];
    switch (value) {
      case 1:
        return <CrossIcon height={50} width={50} />;
      case -1:
        return <CircleIcon height={60} width={60} />;
      default:
        return <View />;
    }
  };

  const onTilePress = (row: number, col: number): void => {
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
    let winner = checkWinner(tileState);
    console.log('Winner', winner);
    if (winner === 1) {
      setWinnerId('sai');
      setCurrentPlayer(1);
    } else if (winner === -1) {
      setWinnerId('sha');
      setCurrentPlayer(1);
    } else {
      if (!tileState.some(data => data.includes(0))) {
        setWinnerId('drawn');
      }
    }
  };

  const startNewGame = () => {
    setTileState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setWinnerId('');
  };

  const Showresult = (winId: string): JSX.Element => {
    switch (winId) {
      case 'sai':
        return (
          <View style={{flexDirection: 'row'}}>
            <CrownIcon height={30} width={30} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 5,
                top: 3,
                color: colors.darkGrey,
              }}>
              sairaj has won
            </Text>
          </View>
        );
      case 'sha':
        return (
          <View style={{flexDirection: 'row'}}>
            <CrownIcon height={30} width={30} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 5,
                top: 3,
                color: colors.darkGrey,
              }}>
              shawn has won
            </Text>
          </View>
        );
      case 'drawn':
        return (
          <View style={{flexDirection: 'row'}}>
            <CrownIcon height={30} width={30} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 5,
                top: 3,
                color: colors.darkGrey,
              }}>
              Game ended in draw
            </Text>
          </View>
        );
      default:
        return (
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 5,
              top: 3,
              color: colors.darkGrey,
            }}>
            Result
          </Text>
        );
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Header />
      <View
        pointerEvents={winnerId.length > 0 ? 'none' : 'auto'}
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Row>
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
        </Row>
        <Row>
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
        </Row>
        <Row>
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
        </Row>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 1,
        }}>
        {Showresult(winnerId)}
        <TouchableOpacity
          onPress={() => startNewGame()}
          style={{
            flexDirection: 'row',
            marginTop: 20,
            borderWidth: 1,
            height: 35,
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: colors.grey,
            borderRadius: 25,
          }}>
          <RefreshIcon height={20} width={20} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.darkGrey,
            }}>
            New Game
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  iconStyle: {
    height: 10,
    width: 10,
  },
});

export default Home;
