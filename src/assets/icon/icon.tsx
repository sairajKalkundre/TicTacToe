import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../utils/colors';

export const CrossIcon = () => (
  <Svg viewBox="0 0 460.775 460.775" height={50} width={50}>
    <Path
      fill={colors.xiconColor}
      d="M285.08 230.397 456.218 59.27c6.076-6.077 6.076-15.911 0-21.986L423.511 4.565a15.55 15.55 0 0 0-21.985 0l-171.138 171.14L59.25 4.565a15.551 15.551 0 0 0-21.985 0L4.558 37.284c-6.077 6.075-6.077 15.909 0 21.986l171.138 171.128L4.575 401.505c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719a15.555 15.555 0 0 0 21.986 0l171.117-171.12 171.118 171.12a15.551 15.551 0 0 0 21.985 0l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986L285.08 230.397z"
    />
  </Svg>
);

export const CircleIcon = () => (
  <Svg height={50} width={50} viewBox="0 0 31.424 31.425">
    <Path
      fill={colors.oIconColor}
      d="M15.712 3.132c6.937 0 12.581 5.644 12.581 12.58 0 6.938-5.645 12.581-12.581 12.581-6.937 0-12.58-5.645-12.58-12.581 0-6.937 5.643-12.58 12.58-12.58m0-3.132C7.035 0 0 7.034 0 15.712c0 8.679 7.035 15.713 15.712 15.713s15.712-7.034 15.712-15.713C31.425 7.034 24.389 0 15.712 0z"
    />
  </Svg>
);
