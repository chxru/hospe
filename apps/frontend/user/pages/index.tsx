import { SearchBar } from '@hospe/ui';
import { Center, SimpleGrid } from '@mantine/core';
import { Api } from '@hospe/next';

export interface Formdata {
  Doctype: string;
}

const IndexPage = () => {
  const onSubmit = async (values: Formdata) => {
    const data = await Api.Doctor.GetTypes(values.Doctype);
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
