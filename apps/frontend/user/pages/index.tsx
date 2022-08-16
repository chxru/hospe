import { useAuthStore } from '@hospe/next';

const IndexPage = () => {
  const { displayName } = useAuthStore();

  return <a href="#">{displayName ? displayName : 'Sign in'}</a>;
};

export default IndexPage;
