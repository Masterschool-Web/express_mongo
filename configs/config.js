import * as dotenv from 'dotenv';
dotenv.config()

const config = {
    app: {
        port: 3000,
        name: 'express_mongo'
    },
    db: {
        host: 'cluster0.jw5th44.mongodb.net/?retryWrites=true&w=majority',
        name: 'express-mongo',
        password:process.env.DB_PASSWORD
    }
};
export default config