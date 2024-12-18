import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
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

app.use(globalErrorHandler);
app.use(notFound)

export default app;
