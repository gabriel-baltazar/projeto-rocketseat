import CreatePartnerService from "../models/Partner";
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function CreatePartner(resquest: Request, response: Response){
    const partner = await prisma.partner.create({
        data:{
            name: resquest.body.name,
            city: resquest.body.city,
            contribution: resquest.body.contribution,
        }
    });
    CreatePartnerService.execute(partner);

    return response.status(201).send();
}