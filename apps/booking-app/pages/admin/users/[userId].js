import { useRouter } from 'next/router';
import { Layout, UserContainer } from '@booking-ui/shared';

const ManageUser = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <Layout>
      <UserContainer userId={userId} />
    </Layout>
  );
};

export default ManageUser;
