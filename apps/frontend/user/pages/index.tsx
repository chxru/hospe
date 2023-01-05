import { Api } from '@hospe/next';
import { GetChannelsByTypeDto } from '@hospe/types';
import { ISearchDoctor, SearchBar, SearchCard } from '@hospe/ui';
import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';

const IndexPage = () => {
  const [session, setSession] = useState<GetChannelsByTypeDto[]>([]);

  useEffect(() => {
    setSession([]);
  }, []);

  const onSubmit = async (values: ISearchDoctor) => {
    const data = await Api.Channeling.GetTypes(values.type);
    setSession(data);
  };

  return (
    <>
      <div style={{ paddingLeft: '15px' }}>
        <Title mb="lg">Search For Appointments</Title>

        <SearchBar onSubmit={onSubmit}></SearchBar>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'row',
            flexWrap: 'wrap',
          }}
        >
          {session.map((item) => (
            <SearchCard
              id={item._id}
              specialization={item.docType}
              date={item.date}
              time={item.time}
              name={item.docName}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
