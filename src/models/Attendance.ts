import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('attendances')
class Attendance {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    student: string;

    @CreateDateColumn()
    presented_at: Date;

}

export default Attendance;