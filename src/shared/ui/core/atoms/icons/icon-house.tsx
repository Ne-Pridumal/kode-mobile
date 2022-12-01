import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from './types'

export const IconHouse = ({ size }: TBaseIconProps) => {
  return (
    <Svg
      width={size ?? 40}
      height={size ?? 40}
      viewBox="0 0 40 40"
      fill="none">
      <Path
        opacity="0.501953"
        d="M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40Z"
        fill="#403A47" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.0617 10.0793L11.0617 15.5237C10.3918 16.0447 10 16.8458 10 17.6944L10 27.7164C10 29.2352 11.2312 30.4664 12.75 30.4664L26.75 30.4664C28.2688 30.4664 29.5 29.2352 29.5 27.7164V17.6944C29.5 16.8458 29.1082 16.0447 28.4384 15.5237L21.4384 10.0793C20.4453 9.30691 19.0547 9.30691 18.0617 10.0793ZM11.5 17.6944C11.5 17.3087 11.6781 16.9446 11.9826 16.7078L18.9826 11.2633C19.434 10.9122 20.0661 10.9122 20.5174 11.2633L27.5175 16.7078C27.8219 16.9446 28 17.3087 28 17.6944V27.7164C28 28.4068 27.4404 28.9664 26.75 28.9664L12.75 28.9664C12.0596 28.9664 11.5 28.4068 11.5 27.7164L11.5 17.6944ZM19.6832 16.7162L17.1521 21.1002C16.3237 22.5351 16.8153 24.3699 18.2502 25.1983C18.894 25.57 19.6425 25.6857 20.3564 25.5383L20.475 25.5139L20.5897 25.4753C20.7783 25.4118 20.9606 25.3296 21.1342 25.2294C22.569 24.401 23.0607 22.5662 22.2322 21.1313L19.6832 16.7162ZM20.3842 23.9303C21.1016 23.5161 21.3474 22.5987 20.9332 21.8813L19.6832 19.7162L18.4512 21.8502C18.0369 22.5677 18.2828 23.485 19.0002 23.8993C19.3203 24.0841 19.6933 24.1436 20.0531 24.0693L20.0828 24.0632L20.1115 24.0536C20.2059 24.0218 20.2972 23.9806 20.3842 23.9303Z"
        fill="#6C78E6" />
    </Svg>
  );
};
