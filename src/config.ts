import {config as dotenvConfig} from "dotenv";
dotenvConfig();

export const port = process.env.PORT || '';
