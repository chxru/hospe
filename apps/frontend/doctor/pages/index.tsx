import { useSession } from 'next-auth/react';

const IndexPage = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return <p>Signed in as {session.user.email}</p>;
  }

  return <a href="#">Sign in</a>;
};

export default IndexPage;
