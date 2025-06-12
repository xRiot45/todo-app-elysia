import Elysia from 'elysia';
import { createTodoController, findAllTodosController, findTodoByIdController } from '../controllers/todo.controller';
import { todoParamsValidation, todoValidation } from '../validations/todo.validation';

export const todoRoutes = new Elysia({ prefix: '/todos' })
    .get('', findAllTodosController, {
        detail: {
            summary: 'Get all todos',
            description: 'Mengambil semua data todo dari database',
            tags: ['Todo'],
            responses: {
                200: {
                    description: 'List of todos',
                    content: {
                        'application/json': {
                            example: [
                                {
                                    id: 1,
                                    title: 'Contoh Todo',
                                    content: 'Deskripsi todo di sini',
                                },
                            ],
                        },
                    },
                },
            },
        },
    })
    .post('', createTodoController, {
        body: todoValidation,
        detail: {
            summary: 'Create new todo',
            description: 'Membuat todo baru dengan title dan content',
            tags: ['Todo'],
            body: {
                description: 'Data todo yang akan dibuat',
                content: {
                    'application/json': {
                        example: {
                            title: 'Belajar Elysia',
                            content: 'Mencoba membuat todo API',
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Todo berhasil dibuat',
                    content: {
                        'application/json': {
                            example: {
                                status: true,
                                data: {
                                    id: 1,
                                    title: 'Belajar Elysia',
                                    content: 'Mencoba membuat todo API',
                                },
                            },
                        },
                    },
                },
                400: {
                    description: 'Validasi gagal atau request body tidak sesuai',
                },
            },
        },
    })
    .get('/:id', findTodoByIdController, {
        params: todoParamsValidation,
        detail: {
            summary: 'Get todo by id',
            description: 'Mengambil todo berdasarkan id',
            tags: ['Todo'],
            responses: {
                200: {
                    description: 'Todo berhasil ditemukan',
                    content: {
                        'application/json': {
                            example: {
                                status: true,
                                data: {
                                    id: 1,
                                    title: 'Belajar Elysia',
                                    content: 'Mencoba membuat todo API',
                                },
                            },
                        },
                    },
                },
                404: {
                    description: 'Todo tidak ditemukan',
                },
            },
        },
    });
