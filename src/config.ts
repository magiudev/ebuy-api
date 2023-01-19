import {config as dotenvConfig} from "dotenv";
dotenvConfig();

const config =  {
    port: process.env.PORT
}

export default config;