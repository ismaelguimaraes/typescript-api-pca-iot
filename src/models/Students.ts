import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('students')
class Students {

    @PrimaryColumn()
    registration: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @Column()
    class: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Students;