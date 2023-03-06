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

  rest.get('http://localhost:3000/members', (req, res, ctx) => {
    console.log('members');
    return res(
      ctx.status(200),
      ctx.json({
        url: 'image.png',
      }),
    );
  }),

  rest.post('http://localhost:3000/auth/refresh', (req, res, ctx) => {
    console.log('refresh');
    return res(
      ctx.status(200),
      ctx.cookie('access_token', 'ACCESS_TOKEN'),
      ctx.cookie('refresh_token', 'REFRESH_TOKEN'),
      ctx.json({
        message: '로그인이 만료되어 access Token을 재발급받았습니다.',
      }),
    );
  }),
];
