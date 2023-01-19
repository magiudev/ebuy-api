import {config as dotenvConfig} from "dotenv";
dotenvConfig();

export const port = process.env.PORT || '';
export const dbUrl = process.env.DB_URL || '';
