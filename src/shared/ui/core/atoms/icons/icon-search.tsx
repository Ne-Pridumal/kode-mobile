import Svg, { Circle, Path } from 'react-native-svg';
import { TBaseIconProps } from './types';
export const IconSearch = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none" >
      <Circle cx="11" cy="11" r="5.25" stroke={color ?? "#706D76"} stroke-width="1.5" />
      <Path d="M15 15L18.5 18.5" stroke={color ?? "#706D76"} stroke-width="1.5" stroke-linecap="round" />
    </Svg>

  );
};
