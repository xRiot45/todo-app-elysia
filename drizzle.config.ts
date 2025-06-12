import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'mysql',
    schema: './src/database/models/*.ts',
    out: './drizzle',
    dbCredentials: {
        host: process.env.DB_HOST!,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USERNAME!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB_DATABASE!,
    },
});
