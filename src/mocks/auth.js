// src/mocks/handlers.js
import { rest } from 'msw';

export const authHandlers = [
  rest.post('/login', (req, res, ctx) => {
    localStorage.setItem('is-authenticated', true);

    return res(ctx.status(200));
  }),

  rest.post('/logout', (req, res, ctx) => {
    localStorage.removeItem('is-authenticated');
    return res(ctx.status(200));
  }),

  rest.get('/profile', (req, res, ctx) => {
    const isAuthenticated = localStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'abul',
      })
    );
  }),
];
