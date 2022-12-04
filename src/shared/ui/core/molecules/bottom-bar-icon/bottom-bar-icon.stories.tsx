import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { BottomIcon } from './bottom-bar-icon'
import { styled } from '@shared/ui/theme';
import { IconProfile } from '../../atoms/icons';

const Meta: ComponentMeta<typeof BottomIcon> = {
  title: 'ui/molecules/bottom-bar-icon',
  component: BottomIcon,
  args: {
    icon: <IconProfile />,
    title: 'Профиль',
    isActive: true
  },
}
const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Meta

type TBottomButtonStory = ComponentStory<typeof BottomIcon>

export const Default: TBottomButtonStory = args => (
  <Wrapper>
    <BottomIcon {...args} />
  </Wrapper>
)
