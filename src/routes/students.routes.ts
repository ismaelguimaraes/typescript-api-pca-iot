import { Router } from 'express';
import { getRepository } from 'typeorm';

import Student from '../models/Students';
import CreateStudentService from '../services/CreateStudentService';

const studentsRouter = Router();

studentsRouter.get('/', async (request, response) => {
    const studentsRepository = getRepository(Student);
    const students = await studentsRepository.find();

    return response.json(students);
})

studentsRouter.post('/', async (request, response) => {
    try {
        const { registration, name, email, telephone, school_class } = request.body;

        const createStudent = new CreateStudentService();

        const user = await createStudent.execute({
            registration,
            name, 
            email, 
            telephone, 
            school_class
        })

        return response.json(user);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default studentsRouter;