import express from 'express';
import otherRouter from './other-router';

const app: express.Application = express();

app.use('/other-routes', otherRouter);

app.get('/', (req, res) => {
  res.send('root route');
});

// If not running on ZEIT Now, start the server
if (!process.env.IS_NOW) {
  const PORT: string = process.env.PORT || '3000';
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

export default app;