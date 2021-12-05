
import { Router } from "express";

import { CreateStudent } from "../controllers/StudentController";

const studentsRouter = Router();

studentsRouter.post("/student/create", CreateStudent);

export { studentsRouter };


