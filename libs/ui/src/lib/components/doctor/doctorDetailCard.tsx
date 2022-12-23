import { FC } from 'react';
import { Text, Table, ScrollArea } from '@mantine/core';

interface RowDetailsProps {
  _id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  birthday: Date;
  specialization: string;
  qualification: string;
}

export interface DoctorDetailsProps {
  doctordata: RowDetailsProps[];
}

export const DoctorDetails: FC<DoctorDetailsProps> = ({ doctordata }) => {
  const rows = doctordata.map((item) => (
    <tr key={item._id}>
      <td>
        <Text size="sm" weight={500}>
          Dr. {item.name}
        </Text>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {item.gender}
        </Text>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {item.specialization}
        </Text>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {item.qualification}
        </Text>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {item.phone}
        </Text>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {item.email}
        </Text>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 500 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Gender</th>
            <th>Specialization</th>
            <th> Qualification</th>
            <th> Email</th>
            <th> Phone</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
