import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import Student from './Students';

/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */

@Entity('attendances')
class Attendance {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    student_id: string;

    @ManyToOne(() => Student)
    @JoinColumn({ name: 'student_id' })
    student: Student;

    @CreateDateColumn()
    presented_at: Date;

}

export default Attendance;