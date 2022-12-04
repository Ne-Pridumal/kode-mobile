import { styled, Theme } from '@shared/ui/theme'
import { TBigTitle } from '../big-title/big-title';
import { LinearGradient } from 'expo-linear-gradient';

type TWrapper = {
  theme: Theme,
  width: string | number,
  height: string | number,
  marginBottom: number,
  marginTop: number
}

const Wrapper = styled.View.attrs(
  ({ theme, height, width }: TWrapper) => ({
    contentContainerStyle: {
      width,
      height,
    }
  })) <TWrapper>`
  padding: 0 ${({ theme }) => theme.spacing(2)}px;
  opacity: 0.5;
  border-radius: 12px;
  overflow: hidden;
  margin-top: ${({ theme, marginTop }: TWrapper) => theme.spacing(marginTop)}px;
  margin-bottom: ${({ theme, marginBottom }: TWrapper) => theme.spacing(marginBottom)}px;
`


export type TBigTitleSkeleton = Omit<TBigTitle, 'title'> & {
  width: string | number,
  height: string | number
}


export const BigTitleSkeleton = ({ width, height, marginTop, marginBottom }: TBigTitleSkeleton) => {
  return (
    <Wrapper
      height={height}
      width={width}
      marginTop={marginTop ?? 0}
      marginBottom={marginBottom ?? 0}>
      <LinearGradient
        colors={['#403A47', '#706D76', '#403A47']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ height: '100%', width: '100%', opacity: 0.5, borderRadius: 12 }}
      />
    </Wrapper>
  );
};
