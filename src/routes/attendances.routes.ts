import { Router } from 'express';
import { getRepository } from 'typeorm';

import Attendance from '@models/Attendance';
import CreateAttendanceService from '@services/CreateAttendanceService';

const attendancesRouter = Router();

attendancesRouter.get('/', async (request, response) => {
    const attendanceRepository = getRepository(Attendance);
    const attendances = await attendanceRepository.find();

    return response.json(attendances);
});

attendancesRouter.post('/', async (request, response) => {
    try {
        const { student_id } = request.body;

        const createAttendance = new CreateAttendanceService();

        const attendance = await createAttendance.execute({
            student_id
        });

        return response.status(200).json(attendance);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default attendancesRouter;