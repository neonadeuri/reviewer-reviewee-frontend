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

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await userGet();
  // 처음에 데이터를 전부 가져오려고 했으나 리뷰어 쪽을 누르지않는다면 불필요한 API 요청이 발생한다고 생각하여 주석처리
  // const reviewer = reviewerGet();
  // const res = await Promise.all([user, reviewer]);
  const data: IUserGetType = {
    userInfo: user,
  };
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
