import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from './types';

export const IconMobile = ({ size }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 40} height={size ?? 40}
      viewBox="0 0 40 40"
      fill="none">
      <Path
        opacity="0.501953"
        d="M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40Z"
        fill="#403A47" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.75 18.75C22.9886 18.75 20.75 16.5114 20.75 13.75C20.75 10.9886 22.9886 8.75 25.75 8.75C28.5114 8.75 30.75 10.9886 30.75 13.75C30.75 16.5114 28.5114 18.75 25.75 18.75ZM25.75 21C25.3358 21 25 21.3358 25 21.75V28.75C25 29.4404 24.4404 30 23.75 30H14.75C14.0596 30 13.5 29.4404 13.5 28.75V12.75C13.5 12.0596 14.0596 11.5 14.75 11.5H18.75C19.1642 11.5 19.5 11.1642 19.5 10.75C19.5 10.3358 19.1642 10 18.75 10H14.75C13.2312 10 12 11.2312 12 12.75V28.75C12 30.2688 13.2312 31.5 14.75 31.5H23.75C25.2688 31.5 26.5 30.2688 26.5 28.75V21.75C26.5 21.3358 26.1642 21 25.75 21ZM19.25 28.25C19.8023 28.25 20.25 27.8023 20.25 27.25C20.25 26.6977 19.8023 26.25 19.25 26.25C18.6977 26.25 18.25 26.6977 18.25 27.25C18.25 27.8023 18.6977 28.25 19.25 28.25ZM29.25 13.75C29.25 15.683 27.683 17.25 25.75 17.25C23.817 17.25 22.25 15.683 22.25 13.75C22.25 11.817 23.817 10.25 25.75 10.25C27.683 10.25 29.25 11.817 29.25 13.75Z"
        fill="#6C78E6" />
    </Svg>
  );
};
