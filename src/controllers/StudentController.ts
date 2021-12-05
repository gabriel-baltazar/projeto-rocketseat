import CreateStudentService from "../models/Student";
import { Request, Response } from "express";

export function CreateStudent(resquest: Request, response: Response){

    CreateStudentService.execute({
        name: resquest.body.name,
        birthDate: resquest.body.birthDate,
        income: resquest.body.income,
        city: resquest.body.city,
        genre: resquest.body.genre,
    });

    return response.status(201).send();
}