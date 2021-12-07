import CreateStudentService from "../models/Student";
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function CreateStudent(resquest: Request, response: Response){
    const student = await prisma.student.create({
        data: {
            name: resquest.body.name,
            birthDate: resquest.body.birthDate,
            income: resquest.body.income,
            city: resquest.body.city,
            genre: resquest.body.genre,
        }
    });
    CreateStudentService.execute(student);

    return response.status(201).send();
}
