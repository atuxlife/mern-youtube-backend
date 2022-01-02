import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
    try {
        const mongooseOptions: ConnectOptions = {
            dbName: process.env.DB_NAME,
            auth: {
                username: process.env.DB_USER,
                password: process.env.DB_PASW
            }
        };
        const db = mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`, mongooseOptions);
        console.log('Database is connected: ', (await db).connection.name);
    } catch (error) {
        console.error(error);
    }
})();
