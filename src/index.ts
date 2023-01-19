import express from 'express';
import cors from "cors";
import { port } from './config';

const app = express();
app.use(cors());

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});
