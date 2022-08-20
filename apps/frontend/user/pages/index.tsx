import { useAuthStore } from '@hospe/next';
import { ResultCard, SearchBar } from '@hospe/ui';
import { Center, SimpleGrid } from '@mantine/core';

const IndexPage = () => {
  const { displayName } = useAuthStore();

  const mockDataSearch = {
    searchData: [
      {
        specializations: ['General Physician', 'Dentist', 'Cardiologist'],
        time: ['Any', 'Morning', 'Afternoon', 'Evening'],
        gender: ['Any', 'Male', 'Female'],
      },
    ],
  };

  const mockDataResult = {
    data: [
      {
        name: 'John Doe',
        specialization: 'General Physician',
        patientCount: 10,
        time: 10,
        fee: 100,
      },
      {
        name: 'John Doe',
        specialization: 'General Physician',
        patientCount: 10,
        time: 10,
        fee: 100,
      },
      {
        name: 'John Doe',
        specialization: 'General Physician',
        patientCount: 10,
        time: 10,
        fee: 100,
      },
    ],
  };

  const items = mockDataResult.data.map((item) => (
    <div key={item.name}>
      <ResultCard {...mockDataResult}></ResultCard>
    </div>
  ));

  return (
    <>
      <div>
        <SearchBar {...mockDataSearch}></SearchBar>
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
            {items}
          </SimpleGrid>
        </Center>
      </div>
    </>
  );
};

export default IndexPage;
