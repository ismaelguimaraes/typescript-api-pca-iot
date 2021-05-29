import { getRepository } from 'typeorm';

import Student from '@models/Students';

interface Request {
    registration: string;
    name: string;
    email: string;
    telephone: string;
    school_class: string;
}

class CreateStudentService {
    public async execute({ registration, name, email, telephone, school_class }: Request): Promise<Student> {
        const studentsRepository = getRepository(Student);

        const checkStudentsExists = await studentsRepository.findOne({
            where: { email }
        });

        if (checkStudentsExists) {
            throw new Error('Email address already used.'); 
        }

        const student = studentsRepository.create({
            registration,
            name,
            email,
            telephone,
            class: school_class
        });

        await studentsRepository.save(student);
        
        return student;
    }
}

export default CreateStudentService;