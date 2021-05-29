import { Router } from 'express';

import attendancesRouter from './attendances.routes';

const routes = Router();

routes.use('/attendances', attendancesRouter);

export default routes;