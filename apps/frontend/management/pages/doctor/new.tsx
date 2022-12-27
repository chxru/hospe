import { Api } from '@hospe/next';
import { CreateEmployeeDto, GetSpecializationDto } from '@hospe/types';
import { RegistrationForm } from '@hospe/ui';
import { Paper, Divider, Group, Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { ReportMedical } from 'tabler-icons-react';

const NewDoctorPage = () => {
  const [specializations, setSpecializations] = useState<
    GetSpecializationDto['data']
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await Api.Booking.GetSpecializations();
        if (res.data) {
          setSpecializations(res.data);
        }
      } catch (error) {
        showNotification({
          message: 'Error occurred while fetching specializations',
          color: 'red',
        });
      }
    })();
  }, []);

  const onSubmit = async (values: CreateEmployeeDto) => {
    await Api.Employee.CreateDoctor(values);
  };

  return (
    <div>
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

        <RegistrationForm
          specializedFields={specializations}
          onSubmit={onSubmit}
        />
      </Paper>
    </div>
  );
};

export default NewDoctorPage;
