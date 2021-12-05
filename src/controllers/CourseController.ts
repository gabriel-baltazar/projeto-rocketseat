import CreateCourseService from "../models/Course";
import { Request, Response } from "express";

export function CreateCourse(resquest: Request, response: Response){

    CreateCourseService.execute({
        subject: resquest.body.subject,
        name: resquest.body.name,
        author: resquest.body.author,
        price: resquest.body.price
    });

    return response.status(201).send();
}