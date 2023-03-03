import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:3000/auth/login/github', (req, res, ctx) => {
    console.log(req.body);
    return res(
      ctx.status(200),
      ctx.json({
        status: 'success',
      }),
    );
  }),
];
