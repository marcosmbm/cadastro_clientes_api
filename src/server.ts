import express from 'express';
import BaseRouter from './routes/v1/Base';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1', BaseRouter);

const port = 3001;

app.listen(port, () => {
    console.log('SERVER RUNNING ON PORT '+port);
});