import express, { Router } from 'express';

const otherRouter: express.Router = Router();

const sleep = (time: number) => new Promise((res, rej) => setTimeout(res, time));

otherRouter.get('/', (req: express.Request, res: express.Response) => {
  res.send('This is the root of the other router');
});

otherRouter.get('/slow', async (req: express.Request, res: express.Response) => {
  await sleep(5000);
  res.send('This should have taking 5 seconds');
});

otherRouter.get('/fast', (req: express.Request, res: express.Response) => {
  console.log('This fast route logs to the server!');
  res.send('This should be fast');
});

export default otherRouter;
