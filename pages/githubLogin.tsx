import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function GithubLogin() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.code);
  }, [router]);

  //전역 component로 로딩을 만들어서 import 사용할 생각입니다.
  return <div>로딩중</div>;
}

export default GithubLogin;
