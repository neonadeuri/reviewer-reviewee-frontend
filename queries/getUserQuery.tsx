import { useQuery } from '@tanstack/react-query';
import { logInUser, refreshUser } from '../pages/api/member';
import { getAccessToken, setAccessToken } from '../utils/authLogic';
import { AxiosError } from 'axios';

const USER_KEY = 'user';

function useGetUserQuery() {
  const access_token = getAccessToken();

  return useQuery([USER_KEY, 'USE_ACCESS_TOKEN'], logInUser, {
    enabled: !!access_token,
    retry: false,
    onError: async (error) => {
      const { response } = error as unknown as AxiosError;
      if (response?.status === 401) {
        const res: string = await refreshUser();
        setAccessToken(res);
        return useGetUserQuery;
      }
    },
  });
}

export default useGetUserQuery;
