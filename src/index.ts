import swagger from '@elysiajs/swagger';
import 'dotenv/config';
import { Elysia } from 'elysia';
import { todoRoutes } from './routes/todo.route';

const app = new Elysia()
    .use(
        swagger({
            documentation: {
                info: {
                    title: 'Todo API',
                    description: 'Dokumentasi REST API untuk Todo App menggunakan Elysia JS + Drizzle ORM',
                    version: '1.0.0',
                },
            },
            path: '/api/documentation',
        }),
    )
    .use(todoRoutes)
    .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
console.log(`🦊 Documentation: http://${app.server?.hostname}:${app.server?.port}/api/documentation`);
