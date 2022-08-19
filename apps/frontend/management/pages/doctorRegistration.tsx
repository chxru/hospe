import { RegistrationForm } from '@hospe/ui';
import { Center, Divider, Group, Paper, Text } from '@mantine/core';
import { ReportMedical } from 'tabler-icons-react';

const doctorRegistration = () => {
  const mockdata = {
    data: [
      { value: 'VOG', label: 'VOG' },
      { value: 'ENT', label: 'ENT' },
      { value: 'VP', label: 'VP' },
      { value: 'Surgon', label: 'Surgon' },
    ],
  };
  return (
    <div>
      <Center>
        <Paper
          radius="md"
          shadow="sm"
          withBorder
          p="lg"
          m="md"
          style={{ height: '100%', width: 500 }}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
          })}
        >
          <Text size="md" pb={12}>
            Add Doctor
          </Text>
          <Divider my="sm" />

          <Group mb={'sm'}>
            <ReportMedical size={18} />
            <Text size="sm">Add new channeling doctor</Text>
          </Group>

          <RegistrationForm {...mockdata}> </RegistrationForm>
        </Paper>
      </Center>
    </div>
  );
};

export default doctorRegistration;
