import axios from 'axios';

const logIn = async (params: string | string[]) => {
  try {
    const response = await axios.post('/auth/login/github', { code: params });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default logIn;
