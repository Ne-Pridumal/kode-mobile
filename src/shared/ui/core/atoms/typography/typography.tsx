import { css } from 'styled-components/native';
import { styled } from '@shared/ui/theme';
import { TypographyVariants } from '@shared/ui/theme/types';

type TTypographyProps = {
  variant?: TypographyVariants;
  color?: string
};

export const Typography = styled.Text.attrs(() => ({
  allowFontScaling: false,
})) <TTypographyProps>`
  ${({ theme: { typography, palette }, variant = 'body20', color }) => css`
    font-family: ${typography[variant].fontFamily};
    letter-spacing: ${typography[variant].letterSpacing};
    line-height: ${typography[variant].lineHeight};
    font-size: ${typography[variant].size};
    color: ${color ?? palette.text.primary};
  `}
`;
