import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Attendance from '@models/Attendance';
import AttendanceRepository from '@repositories/AttendanceRepository';

interface Request {
    date: Date;
    student: string;
}

class CreateAttendanceService {
    public async execute({ date, student }: Request): Promise<Attendance> {
        const attendanceRepository = getCustomRepository(AttendanceRepository);

        const attendanceDate = startOfHour(date);

        const findAttendanceInSameDate = attendanceRepository.findByDate(attendanceDate);

        if (findAttendanceInSameDate) {
            throw Error('This student is already present.');
        }

        const attendanceRegister = attendanceRepository.create({
            student
        });

        await attendanceRepository.save(attendanceRegister);
        
        return attendanceRegister;
    }
}

export default CreateAttendanceService;