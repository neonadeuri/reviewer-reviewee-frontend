import { GetServerSideProps } from 'next';
import InformationTemplate from '../../components/userInfomation/InformationTemplate';
import { IUserGetType, UserPageProps } from '../../components/userInfomation/informationType';
import { userGet } from '../api/userInfo';

const UserPage = ({ data }: UserPageProps) => {
  return (
    <div className="h-full flex justify-center mt-14 px-6">
      <InformationTemplate data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query as { userId: string };
  const res = await userGet(query.userId);
  const data: IUserGetType = res.data;

  if (res.status === 404) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
