import { Api } from '@hospe/next';
import { GetChannelsByTypeDto } from '@hospe/types';
import { ISearchDoctor, SearchBar, SearchRes } from '@hospe/ui';
import { Center, SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';

const IndexPage = () => {
  const [session, setSession] = useState<GetChannelsByTypeDto[]>([]);

  useEffect(() => {
    setSession([]);

    (async () => {
      const data = await Api.Booking.GetMy();
      console.log('My bookings', data);
    })();
  }, []);

  const onSubmit = async (values: ISearchDoctor) => {
    const data = await Api.Channeling.GetTypes(values.type);
    setSession(data);
  };

  return (
    <>
      <div>
        <SearchBar onSubmit={onSubmit}></SearchBar>
        <Center>
          <SimpleGrid
            cols={3}
            spacing="lg"
            mt={40}
            breakpoints={[
              { maxWidth: 1000, cols: 2, spacing: 'md' },
              { maxWidth: 755, cols: 1, spacing: 'sm' },
            ]}
          >
            {/* {items} */}
          </SimpleGrid>
        </Center>
        <SearchRes data={session}></SearchRes>
      </div>
    </>
  );
};

export default IndexPage;
