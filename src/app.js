import express from 'express';
import dotenv from 'dotenv';
import appRouter from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(appRouter)

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
    }
);