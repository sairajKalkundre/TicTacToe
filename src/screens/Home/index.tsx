import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Tile from '../../components/Tile';
import {
  CircleIcon,
  CrossIcon,
  CrownIcon,
  DrawIcon,
  RefreshIcon,
} from '../../assets/icon/icon';
import {checkWinner} from '../../utils/helper';
import Row from '../../components/Row';
import Header from '../../components/Header';
import {colors} from '../../utils/colors';
import styling from './home.style';

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
        return <CrossIcon height={50} width={50} color={colors.xiconColor} />;
      case -1:
        return <CircleIcon height={60} width={60} color={colors.oIconColor} />;
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

  //To reset the game
  const startNewGame = () => {
    setTileState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setWinnerId('');
    setCurrentPlayer(1);
  };

  //Function which returns results
  const Showresult = (winId: string): JSX.Element => {
    switch (winId) {
      case 'sai':
        return (
          <View style={{flexDirection: 'row'}}>
            <CrownIcon height={30} width={30} color={colors.xiconColor} />
            <Text style={styling.resultTextStyle}>sairaj has won</Text>
          </View>
        );
      case 'sha':
        return (
          <View style={{flexDirection: 'row'}}>
            <CrownIcon height={30} width={30} color={colors.oIconColor} />
            <Text style={styling.resultTextStyle}>shawn has won</Text>
          </View>
        );
      case 'drawn':
        return (
          <View style={{flexDirection: 'row'}}>
            <DrawIcon height={40} width={40} color={colors.black} />
            <Text style={styling.resultTextStyle}>Game ended in draw</Text>
          </View>
        );
      default:
        return <Text style={styling.resultTextStyle}>Result</Text>;
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
            props={styling.leftTopTileStyle}
            icon={showIcon(0, 0)}
            onTilePress={() => onTilePress(0, 0)}
          />
          <Tile
            props={styling.middleTopTileStyle}
            icon={showIcon(0, 1)}
            onTilePress={() => onTilePress(0, 1)}
          />
          <Tile
            props={styling.rightTopTileStyle}
            icon={showIcon(0, 2)}
            onTilePress={() => onTilePress(0, 2)}
          />
        </Row>
        <Row>
          <Tile
            props={styling.centerLeftTileStyle}
            icon={showIcon(1, 0)}
            onTilePress={() => onTilePress(1, 0)}
          />
          <Tile icon={showIcon(1, 1)} onTilePress={() => onTilePress(1, 1)} />
          <Tile
            props={styling.centerRightTileStyle}
            icon={showIcon(1, 2)}
            onTilePress={() => onTilePress(1, 2)}
          />
        </Row>
        <Row>
          <Tile
            props={styling.bottomLeftTileStyle}
            icon={showIcon(2, 0)}
            onTilePress={() => onTilePress(2, 0)}
          />
          <Tile
            props={styling.bottomMiddleTileStyle}
            icon={showIcon(2, 1)}
            onTilePress={() => onTilePress(2, 1)}
          />
          <Tile
            props={styling.bottomRightTileStyle}
            icon={showIcon(2, 2)}
            onTilePress={() => onTilePress(2, 2)}
          />
        </Row>
      </View>
      <View style={styling.footerContainer}>
        {Showresult(winnerId)}
        <TouchableOpacity
          onPress={() => startNewGame()}
          style={styling.newGameContainer}>
          <RefreshIcon height={20} width={20} color={colors.grey} />
          <Text style={styling.newGameTextStyle}>New Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
