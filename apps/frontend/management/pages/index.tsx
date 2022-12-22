import { Api } from '@hospe/next';
import { useEffect, useState } from 'react';

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
      setEmployees(res.data);
    });
  }, []);

  return <div> Welcome to Hospe, we have {employees?.length}</div>;
}

export default Index;
