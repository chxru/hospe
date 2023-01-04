import { FC, useEffect, useState } from 'react';
import {
  Text,
  Modal,
  Button,
  Group,
  SimpleGrid,
  Center,
  TextInput,
} from '@mantine/core';
import { BrandPaypal } from 'tabler-icons-react';
import { Api } from '@hospe/next';
import { showNotification } from '@mantine/notifications';

export interface PaymentProps {
  session_id: string;
  fee: number;
}

export const Payment: FC<PaymentProps> = ({ session_id, fee }) => {
  const [opened, setOpened] = useState(false);
  const [disable, setDisable] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      if (!opened) return;

      const status = await Api.Booking.CheckAvailability(session_id);
      setDisable(!status);

      if (!status) {
        showNotification({
          title: 'Booking Unavailable',
          message: 'You are already subscribed to this session',
          color: 'red',
        });
      }
    })();
  }, [opened, session_id]);

  useEffect(() => {
    console.log('disable', disable);
  }, [disable]);

  const onClick = () => {
    setOpened(false);

    Api.Booking.Confirm({ session_id });
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
              <Button disabled={disable} onClick={onClick}>
                Pay LKR {fee}
              </Button>
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
