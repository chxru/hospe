import { useAuthStore } from '@hospe/next';
import { ResultCard, SearchBar } from '@hospe/ui';
import { Center, SimpleGrid } from '@mantine/core';
import { Api } from '@hospe/next';

export interface Formdata {
  Doctype: string;
}

const IndexPage = () => {
  const { displayName } = useAuthStore();

  const onSubmit = async (values: Formdata) => {
    console.log(values.Doctype);
    const data = await Api.Doctor.GetTypes(values.Doctype);
    console.log(data);
  };

  const mockDataSearch = {
    searchData: [
      {
        specializations: ['Surgeon', 'Dentist', 'Cardiologist'],
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

  // const items = mockDataResult.data.map((item) => (
  //   <div key={item.name}>
  //     <ResultCard {...mockDataResult}></ResultCard>
  //   </div>
  // ));

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
      </div>
    </>
  );
};

export default IndexPage;
