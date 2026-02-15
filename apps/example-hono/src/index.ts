import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.html('Hello Hono!');
});

export const handler = (event: Request) => app.fetch(event);
