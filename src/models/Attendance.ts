import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('attendances')
class Attendance {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    student: string;

    @Column('timestamp with time zone')
    presented_at: Date;

}

export default Attendance;