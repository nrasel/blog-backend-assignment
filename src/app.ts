import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
const app: Application = express();

// parser
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my blog project!!!🌼🧐');
});

export default app;
