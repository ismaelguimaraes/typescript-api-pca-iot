import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import AttendanceRepository from '@repositories/AttendanceRepository';
import CreateAttendanceService from '@services/CreateAttendanceService';

const attendancesRouter = Router();

attendancesRouter.get('/', async (request, response) => {
    const attendanceRepository = getCustomRepository(AttendanceRepository);
    const attendances = await attendanceRepository.find();

    return response.json(attendances);
});

attendancesRouter.post('/', async (request, response) => {
    try {
        const { student } = request.body;

        const createAttendance = new CreateAttendanceService();

        const attendance = await createAttendance.execute({
            student
        });

        return response.status(200).json(attendance);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default attendancesRouter;