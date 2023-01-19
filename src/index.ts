import express from 'express';
import cors from "cors";
import { port } from './config';
import startDbConnection from './database/config';

const app = express();
app.use(cors());
startDbConnection();

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});
