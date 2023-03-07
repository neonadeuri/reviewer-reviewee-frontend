import Template from '../components/Main/Template';
import Header from '../components/Header';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { IData, IAllPagePropsData } from '../globalType';
import logInUser from './api/logInUser';

const Home = ({ image_url, isLogIn }: IAllPagePropsData) => {
  console.log(image_url, isLogIn);
  return (
    <>
      <Header image_url={image_url} isLogIn={isLogIn}></Header>
      <div className="w-full h-full flex justify-center">
        <Template />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
    const response = await logInUser();
    const data: IData = response?.data;
    const image_url = data.image_url;
    const isLogIn = true;
    return {
      props: {
        image_url,
        isLogIn,
      },
    };
  }
  const image_url = '';
  const isLogIn = false;
  return {
    props: {
      image_url,
      isLogIn,
    },
  };
};

export default Home;
