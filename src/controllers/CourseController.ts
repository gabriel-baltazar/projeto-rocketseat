import CreateCourseService from "../models/Course";
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function CreateCourse(resquest: Request, response: Response){
    const course = await prisma.course.create({
        data:{
            subject: resquest.body.subject,
            name: resquest.body.name,
            author: resquest.body.author,
            price: resquest.body.price
        }
    });
    CreateCourseService.execute(course);

    return response.status(201).send();
}