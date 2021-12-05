import { Router } from "express";

import { CreatePartner } from "../controllers/PartnerController";

const partnersRouter = Router();

partnersRouter.post("/partner/create", CreatePartner);

export { partnersRouter };



