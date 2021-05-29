import { Router } from 'express';

import attendancesRouter from './attendances.routes';
import studentsRouter from './students.routes';

const routes = Router();

routes.use('/attendances', attendancesRouter);
routes.use('/students', studentsRouter);

export default routes;