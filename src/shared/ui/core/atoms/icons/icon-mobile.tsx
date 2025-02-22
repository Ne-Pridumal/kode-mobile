import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from './types';

export const IconMobile = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 1H16.5C18.1569 1 19.5 2.34315 19.5 4V20C19.5 21.6569 18.1569 23 16.5 23H7.5C5.84315 23 4.5 21.6569 4.5 20V4C4.5 2.34315 5.84315 1 7.5 1ZM7.5 2.5C6.67157 2.5 6 3.17157 6 4V20C6 20.8284 6.67157 21.5 7.5 21.5H16.5C17.3284 21.5 18 20.8284 18 20V4C18 3.17157 17.3284 2.5 16.5 2.5H7.5ZM12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
        fill={color ?? "#6C78E6"}
      />
    </Svg>

  );
};
