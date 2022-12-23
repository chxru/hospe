import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Payment } from './payment';
import { PaymentProps } from './payment';

export default {
  component: Payment,
  title: 'common/Payment',
} as ComponentMeta<typeof Payment>;

const mockdata: PaymentProps = {
  paymentData: {
    amount: 1000,
  },
};

const Template: ComponentStory<typeof Payment> = () => (
  <Payment {...mockdata} />
);

export const Primary = Template.bind({});
Primary.args = {};
