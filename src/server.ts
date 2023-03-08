import express from 'express';
import BaseRouter from './routes/v1/Base';

const app = express();

app.use(express.json());

app.use('/v1', BaseRouter);

const port = 3001;

app.listen(port, () => {
    console.log('SERVER RUNNING ON PORT '+port);
});