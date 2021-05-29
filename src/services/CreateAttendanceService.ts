import { getRepository } from 'typeorm';

import Attendance from '../models/Attendance';

interface Request {
    student_id: string;
}

class CreateAttendanceService {
    public async execute({ student_id }: Request): Promise<Attendance> {
        const attendanceRepository = getRepository(Attendance);

        const attendanceRegister = attendanceRepository.create({
            student_id
        });

        await attendanceRepository.save(attendanceRegister);
        
        return attendanceRegister;
    }
}

export default CreateAttendanceService;