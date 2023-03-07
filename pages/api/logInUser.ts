import axios, { AxiosError } from 'axios';

const logInUser = async () => {
  console.log('logInUser 실행');
  try {
    const response = await axios.get('http://localhost:3000/members');
    return response;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    if (response?.status === 401) {
      console.log('logInUser Error 실행');
      await axios.post('http://localhost:3000/auth/refresh');
      const refreshLogInResponse = await axios.get('http://localhost:3000/members1');
      return refreshLogInResponse;
    }
  }
};

export default logInUser;
