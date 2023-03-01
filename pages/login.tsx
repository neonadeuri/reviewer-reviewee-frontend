import React from 'react';

function login() {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;

  const loginUri = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/githubLogin`;

  return <a href={loginUri}>깃허브로그인</a>;
}

export default login;
