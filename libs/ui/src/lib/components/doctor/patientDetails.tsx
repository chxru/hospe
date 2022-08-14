import { FC } from 'react';
import { Text, Table, ScrollArea } from '@mantine/core';

interface RowDetailsProps {
  name: string;
  gender: string;
  age: number;
  appointmentNumber: number;
}

export interface PatientDetailsProps {
  patientdata: RowDetailsProps[];
}

export const PatientDetails: FC<PatientDetailsProps> = ({ patientdata }) => {
  const rows = patientdata.map((item) => (
    <tr key={item.name}>
      <td>
        <Text size="sm" weight={500}>
          {item.name}
        </Text>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {item.gender}
        </Text>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {item.age} Years
        </Text>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {item.appointmentNumber}
        </Text>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 600 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th> Number</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
