import express from 'express';
import { welcomeController } from '../controllers/welcomeController';

const appRouter = express.Router();

appRouter.get('/', welcomeController);

export default appRouter;