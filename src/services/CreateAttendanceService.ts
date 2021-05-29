import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Attendance from '@models/Attendance';
import AttendanceRepository from '@repositories/AttendanceRepository';

interface Request {
    student: string;
}

class CreateAttendanceService {
    public async execute({ student }: Request): Promise<Attendance> {
        const attendanceRepository = getCustomRepository(AttendanceRepository);

        const attendanceRegister = attendanceRepository.create({
            student
        });

        await attendanceRepository.save(attendanceRegister);
        
        return attendanceRegister;
    }
}

export default CreateAttendanceService;