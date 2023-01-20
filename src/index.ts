import express from 'express';
import cors from "cors";
import { port } from './config';
import startDbConnection from './database/config';
import authRouter from './routers/auth';

const app = express();
app.use(cors());
app.use(express.json());
startDbConnection();
app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});
