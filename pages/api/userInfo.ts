import axios from 'axios';
import { IReviewerRegisterUpdateType, IUserUpdateType } from '../../components/userInfomation/informationType';

export const userInfoUpdate = async (userInfo: IUserUpdateType) => {
  const user = await axios.patch('http://localhost:3000/members/me', userInfo);
  return user;
};

export const registerUpdate = async (regiInfo: IReviewerRegisterUpdateType) => {
  const register = await axios.patch('http://localhost:3000/members/me/reviewer', regiInfo);
  return register;
};

export const userGet = async (userId: string) => {
  const getData = await axios.get(`http://localhost:3000/members/${userId}`);
  return getData;
};
