import { useEffect } from 'react';
import { useRouter } from 'next/router';
import logIn from '../pages/api/logIn';

function useRedirectBefore() {
  const router = useRouter();

  return useEffect(() => {
    if (router.query.code) {
      console.log(router.query.code);
      logIn(router.query.code).then((res) => {
        console.log(res?.status);
        if (res?.status === 200) {
          //router.replace(localStorage.getItem('path') || '/');
          //logIn 하기 이전 페이지로 이동
        }
      });
    }
  }, [router.query.code]);
}

export default useRedirectBefore;
