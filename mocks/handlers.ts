import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:3000/auth/login/github', (req, res, ctx) => {
    console.log(req.body);
    return res(
      ctx.status(200),
      ctx.cookie('access_token', 'ACCESS_TOKEN'),
      ctx.cookie('refresh_token', 'REFRESH_TOKEN'),
      ctx.json({
        message: '로그인에 성공했습니다.',
      }),
    );
  }),
];
