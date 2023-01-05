import { Api } from '@hospe/next';
import {
  Badge,
  Card,
  Group,
  Button,
  Image,
  Text,
  Modal,
  Center,
  SimpleGrid,
  TextInput,
} from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import { Clock, Calendar, BrandPaypal } from 'tabler-icons-react';

interface SearchCardProps {
  id: string;
  name: string;
  specialization: string;
  time: string;
  date: string;
  fee: number;
}

const MakeTwoDigits = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

const SearchCard: FC<SearchCardProps> = (props) => {
  const [checkout, setCheckout] = useState<boolean>(false);
  const [available, setAvailable] = useState<boolean>(false);

  const time = new Date(props.time);
  const date = new Date(props.date);

  const t =
    MakeTwoDigits(
      time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
    ) +
    ' : ' +
    MakeTwoDigits(time.getMinutes()) +
    ' ' +
    (time.getHours() > 12 ? 'PM' : 'AM');

  useEffect(() => {
    (async () => {
      const status = await Api.Booking.CheckAvailability(props.id);
      setAvailable(status);
    })();
  }, [props.id]);

  return (
    <>
      <div style={{ minWidth: 340, margin: 15 }}>
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src="./logo.png" height={160} alt="Norway" />
          </Card.Section>

          <Group position="apart" style={{ marginTop: 15, marginBottom: 25 }}>
            <Text weight={500}>{props.name}</Text>
            <Badge color="blue" variant="light">
              {props.specialization}
            </Badge>
          </Group>

          <span>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <Clock size={18} />
              <Text ml="15px">{t}</Text>
            </span>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <Calendar size={18} />
              <Text ml="15px">
                {MakeTwoDigits(date.getMonth() + 1)}/
                {MakeTwoDigits(date.getDate())}
              </Text>
            </span>
          </span>

          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
            onClick={() => setCheckout(true)}
            disabled={!available}
          >
            {available ? 'Book Now' : "You've already booked this"}
          </Button>
        </Card>
      </div>

      <Modal opened={checkout} onClose={() => setCheckout(false)}>
        <>
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
                <Button>
                  <Text>Pay fee {props.fee} LKR</Text>
                </Button>
              </Group>
            </Center>
          </form>
        </>
      </Modal>
    </>
  );
};

export { SearchCard };
