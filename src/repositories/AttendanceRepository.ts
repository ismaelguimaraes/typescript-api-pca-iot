import { EntityRepository, Repository} from 'typeorm';

import Attendance from '@models/Attendance';

@EntityRepository(Attendance)
class AttendanceRepository extends Repository<Attendance> {
    public async findByDate (date: Date): Promise<Attendance | null> {
        const findAttendance = await this.findOne({ where: { date } });

        return findAttendance || null;
    }
}

export default AttendanceRepository;