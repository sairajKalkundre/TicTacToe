import React from 'react';
import {View} from 'react-native';

interface RowProps {
  children: JSX.Element | JSX.Element[];
}
const Row = (props: RowProps) => {
  return <View style={{flexDirection: 'row'}}>{props.children}</View>;
};

export default Row;
