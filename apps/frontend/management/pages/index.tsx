import { Api } from '@hospe/next';
import { useEffect, useState } from 'react';
import { DoctorDetails } from '@hospe/ui';
import { Divider, Group, Paper, ScrollArea, Text } from '@mantine/core';
import { Users } from 'tabler-icons-react';

interface Employee {
  _id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  birthday: Date;
  specialization: string;
  qualification: string;
}

export function Index() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    Api.Employee.GetAll().then((res) => {
      setEmployees(res);
    });
  }, []);

  return (
    <div>
      <Paper
        radius="md"
        shadow="sm"
        withBorder
        p="lg"
        m="md"
        style={{ height: '100%' }}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        })}
      >
        <Text size="md" pb={12} weight={700}>
          Registered Doctors
        </Text>

        <Divider my="sm" />

        <Group mb={'sm'}>
          <Users size={18} />
          <Text size="xs">{employees.length} Registered Doctors</Text>
        </Group>

        <ScrollArea
          style={{ height: '80%', width: '100%', paddingBottom: 12 }}
          type="hover"
        >
          <DoctorDetails doctordata={employees} />
        </ScrollArea>
      </Paper>
    </div>
  );
}

export default Index;
