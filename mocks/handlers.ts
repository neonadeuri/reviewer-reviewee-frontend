import { rest } from 'msw';
import { IUserUpdateType } from '../components/userInfomation/informationType';

let username = 'kuku';
let email = 'kuku@gmail.com';

export const handlers = [
  rest.patch('http://localhost:3000/members/me', async (req, res, ctx) => {
    const request: IUserUpdateType = await req.json();
    username = request.username;
    email = request.email;
    return res(ctx.status(204));
  }),

  rest.get('http://localhost:3000/members/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userInfo: {
          username: username,
          email: email,
          githubURL: 'https://github@url.com/kukus',
        },
        register: {
          job: '프론트엔드',
          career: '주니어(1~3년)',
          techStack: [
            { id: 1, skill: 'React' },
            { id: 3, skill: 'Spring' },
          ],
          introduction: '저는 3년차 개발자입니다.',
        },
        registerOption: {
          positionList: ['프론트엔드', '백엔드', '모바일', '기타'],
          careerList: ['신입(1년이하)', '주니어(1~3년)', '미들(4~8년)', '시니어(9년이상)'],
          techList: [
            { id: 1, skill: 'React' },
            { id: 2, skill: 'SpringBoot' },
            { id: 3, skill: 'Spring' },
            { id: 4, skill: 'View' },
          ],
        },
      }),
    );
  }),

  rest.patch('http://localhost:3000/members/me/reviewer', (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(204));
  }),
];
