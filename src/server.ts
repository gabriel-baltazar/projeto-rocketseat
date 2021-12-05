import express from 'express';
import { coursesRouter } from './routes/courses.routes';
import { partnersRouter } from './routes/partners.routes';
import { studentsRouter } from './routes/students.routes';

const app = express();
app.use(express.json());

app.use(coursesRouter);
app.use(partnersRouter);
app.use(studentsRouter);

app.listen(3333, () => console.log("Server is running!"));
