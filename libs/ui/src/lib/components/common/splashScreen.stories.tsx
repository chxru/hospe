import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SplashScreen } from './splashScreen';

export default {
  component: SplashScreen,
  title: 'Common/SplashScreen',
} as ComponentMeta<typeof SplashScreen>;

const Template: ComponentStory<typeof SplashScreen> = () => <SplashScreen />;

export const Primary = Template.bind({});
Primary.args = {};
