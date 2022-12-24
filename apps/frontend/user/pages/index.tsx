import { SearchBar, SearchRes } from '@hospe/ui';
import { Center, SimpleGrid } from '@mantine/core';
import { Api } from '@hospe/next';
import { useEffect, useState } from 'react';

export interface Formdata {
  Doctype: string;
}

interface SearchData {
  _id: string;
  docType: string;
  docFee: number;
  time: string;
  maximumPatients: number;
  date: string;
  docName: string;
}

interface docFee {
  docFee: number;
}

const IndexPage = () => {
  const [session, setSession] = useState<SearchData[]>([]);
  const [fee, setFee] = useState<docFee[]>([]);

  useEffect(() => {
    setSession([]);
  }, []);

  const onSubmit = async (values: Formdata) => {
    const data = await Api.Doctor.GetTypes(values.Doctype);
    setSession(data);
    setFee(data.docFee);
  };

  const mockDataSearch = {
    searchData: [
      {
        specializations: ['Surgeon', 'ENT', 'VOG'],
        time: ['Any', 'Morning', 'Afternoon', 'Evening'],
        gender: ['Any', 'Male', 'Female'],
      },
    ],
  };

  return (
    <>
      <div>
        <SearchBar {...mockDataSearch} onSubmit={onSubmit}></SearchBar>
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
        <SearchRes searchData={session}></SearchRes>
      </div>
    </>
  );
};

export default IndexPage;
