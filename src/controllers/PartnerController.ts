import CreatePartnerService from "../models/Partner";
import { Request, Response } from "express";

export function CreatePartner(resquest: Request, response: Response){

    CreatePartnerService.execute({
        name: resquest.body.name,
        city: resquest.body.city,
        contribution: resquest.body.contribution,
    });

    return response.status(201).send();
}