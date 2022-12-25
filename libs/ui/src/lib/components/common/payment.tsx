import { FC, useState } from 'react';
import {
  Text,
  Modal,
  Button,
  Group,
  SimpleGrid,
  Center,
  TextInput,
  Image,
} from '@mantine/core';
import { BrandPaypal } from 'tabler-icons-react';
import { Api } from '@hospe/next';

interface RowDetailsProps {
  amount: number;
}

export interface PaymentProps {
  paymentData: RowDetailsProps;
}

export const Payment: FC<PaymentProps> = ({ paymentData }) => {
  const [opened, setOpened] = useState(false);
  const [color, setColor] = useState('blue');

  const onClick = () => {
    setOpened(false);

    Api.Doctor.Confirm(1000);
  };

  return (
    <div>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <Center>
          <Group>
            <BrandPaypal size={30} strokeWidth={2} color={'black'} />
            <Text size="xl" weight={500}>
              Checkout
            </Text>
          </Group>
        </Center>

        <form
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >
          <SimpleGrid
            cols={1}
            spacing="lg"
            breakpoints={[
              { maxWidth: 'md', cols: 2, spacing: 'sm' },
              { maxWidth: 'sm', cols: 1, spacing: 'sm' },
            ]}
          >
            {/* First Name */}
            <div>
              <TextInput required label="Name" placeholder="John Doe" />
            </div>

            {/* Last Name */}
            <div>
              <TextInput required label="Card number" placeholder="" />
            </div>

            <SimpleGrid cols={2} spacing="lg">
              <TextInput required label="Expire Month" placeholder="" />
              <TextInput required label="Expire Year" placeholder="" />
            </SimpleGrid>
          </SimpleGrid>

          <div>
            <TextInput required label="CSV" placeholder="" />
          </div>

          <Center>
            <Group position="right" mt="md">
              <Button onClick={onClick}>Pay LKR 1000 </Button>
            </Group>
          </Center>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Book</Button>
      </Group>
    </div>
  );
};
