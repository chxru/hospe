import { Api } from '@hospe/next';
import { Badge, Card, Group, Button, Image, Text, Modal } from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import { Clock, Calendar } from 'tabler-icons-react';

interface SearchCardProps {
  id: string;
  name: string;
  specialization: string;
  time: string;
  date: string;
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
        <Text>modal</Text>
      </Modal>
    </>
  );
};

export { SearchCard };
