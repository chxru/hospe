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
import { useForm, zodResolver } from '@mantine/form';
import { FC, useEffect, useState } from 'react';
import { Clock, Calendar, BrandPaypal } from 'tabler-icons-react';
import { z } from 'zod';

interface SearchCardProps {
  id: string;
  name: string;
  specialization: string;
  time: string;
  date: string;
  fee: number;
}

const schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  card: z
    .string()
    .min(16, { message: 'Card number should have at least 16 numbers' }),
  expireMonth: z
    .string()
    .min(2, { message: 'Expire month should have at least 2 numbers' }),
  expireYear: z
    .string()
    .min(2, { message: 'Expire year should have at least 2 numbers' }),
  cvv: z.string().min(3, { message: 'CVV should have at least 3 numbers' }),
});

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

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: '',
      card: '',
      expireMonth: '',
      expireYear: '',
      cvv: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    await Api.Booking.Confirm({ session_id: props.id });
    setCheckout(false);
  };

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
            onSubmit={form.onSubmit((values) => {
              onSubmit(values);
            })}
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
                <TextInput
                  required
                  label="Name"
                  placeholder="John Doe"
                  {...form.getInputProps('name')}
                />
              </div>

              {/* Last Name */}
              <div>
                <TextInput
                  required
                  label="Card number"
                  placeholder=""
                  {...form.getInputProps('card')}
                />
              </div>

              <SimpleGrid cols={2} spacing="lg">
                <TextInput
                  required
                  label="Expire Month"
                  placeholder="MM"
                  {...form.getInputProps('expireMonth')}
                />
                <TextInput
                  required
                  label="Expire Year"
                  placeholder="DD"
                  {...form.getInputProps('expireYear')}
                />
              </SimpleGrid>
            </SimpleGrid>

            <div>
              <TextInput
                required
                label="CVV"
                placeholder="CVV"
                {...form.getInputProps('cvv')}
              />
            </div>

            <Center>
              <Group position="right" mt="md">
                <Button type="submit">
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
