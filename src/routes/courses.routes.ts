import { Router } from "express";

import { CreateCourse } from "../controllers/CourseController";

const coursesRouter = Router();

coursesRouter.post("/course/create", CreateCourse);

export { coursesRouter }



