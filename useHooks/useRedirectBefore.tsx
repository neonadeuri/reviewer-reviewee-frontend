import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useRedirectBefore() {
  const router = useRouter();

  return useEffect(() => {
    if (router.query.code) {
      //router.replace(localStorage.getItem('path') || '/');
      console.log(router.query.code);
    }
  }, [router.query.code]);
}

export default useRedirectBefore;
