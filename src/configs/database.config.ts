import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

export const connectDatabase = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '3306'),
        database: process.env.DB_DATABASE,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    });

    return drizzle(connection);
};

export const db = await connectDatabase();
