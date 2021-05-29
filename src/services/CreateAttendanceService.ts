import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Attendance from '@models/Attendance';
import AttendanceRepository from '@repositories/AttendanceRepository';

interface Request {
    student_id: string;
}

class CreateAttendanceService {
    public async execute({ student_id }: Request): Promise<Attendance> {
        const attendanceRepository = getCustomRepository(AttendanceRepository);

        const attendanceRegister = attendanceRepository.create({
            student_id
        });

        await attendanceRepository.save(attendanceRegister);
        
        return attendanceRegister;
    }
}

export default CreateAttendanceService;