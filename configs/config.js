import * as dotenv from 'dotenv';
dotenv.config()

const config = {
    app: {
        port: 3000,
        name: 'express_mongo'
    },
    db: {
        host:process.env.DB_HOST,
        name:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD
    }
};
export default config