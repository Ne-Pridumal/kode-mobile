import { FC, MouseEvent, ReactNode } from "react";
import { styled, Theme } from '@shared/ui/theme'
import { View } from "react-native";
import { Typography } from "../../atoms";

const Wrapper = styled(View)`
  flex-direction: column;
  align-items: center;
`

type TTExt = {
  theme: Theme,
  isActive: boolean
}
const Text = styled(Typography) <TTExt>`
  flex: 1;
  color: ${({ theme, isActive }: TTExt) => isActive ? theme.palette.accent.secondary : theme.palette.text.secondary};
`

export type TBottomIcon = {
  icon: ReactNode,
  title: string,
  isActive: boolean,
}

export const BottomIcon = ({ icon, title, isActive, }: TBottomIcon) => {
  return (
    <Wrapper>
      {icon}
      <Text variant="caption2" isActive={isActive}>
        {title}
      </Text>
    </Wrapper>
  );
};

