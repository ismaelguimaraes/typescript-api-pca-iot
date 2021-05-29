import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateStudentService from '@services/CreateStudentService';

const studentsRouter = Router();


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