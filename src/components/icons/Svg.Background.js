import * as React from 'react';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { device } from '../../constants';

const SvgBackground = () => {
  const height = (812 / 375) * device.width;

  return (
    <Svg width={device.width} height={height} viewBox="0 0 375 812">
      <Defs>
        <LinearGradient id="c" x1="100%" y1="70%" x2="0%" y2="30%">
          <Stop stopColor="#202024" offset="0" />
          <Stop stopColor="#202024" offset="48%" />
          <Stop stopColor="#202024" offset="52%" />
          <Stop stopColor="#202024" offset="100%" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#c)" />
    </Svg>
  );
};

export default React.memo(SvgBackground);
