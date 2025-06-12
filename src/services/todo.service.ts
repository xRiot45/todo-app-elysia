import { Todo, TodoForm } from '../interfaces/todo.interface';
import * as todoRepository from '../repositories/todo.repository';
import { ApiResponse } from '../types';

export const findAllTodosService = async (): Promise<ApiResponse<Todo[]>> => {
    try {
        const todos = await todoRepository.findAllTodos();
        return {
            status: true,
            data: todos,
        };
    } catch (error) {
        return {
            status: false,
            message: 'Failed to create todo',
            error: error as string,
        };
    }
};

export const createTodoService = async (request: TodoForm): Promise<ApiResponse<Todo | null>> => {
    try {
        const { title, content } = request;
        const result = await todoRepository.createTodo(title, content);
        return {
            status: true,
            data: result,
        };
    } catch (error) {
        return {
            status: false,
            error: error as string,
        };
    }
};

export const findTodoByIdService = async (id: number): Promise<ApiResponse<Todo | null>> => {
    try {
        const result = await todoRepository.findTodoById(id);
        return {
            status: true,
            data: result,
        };
    } catch (error) {
        return {
            status: false,
            error: error as string,
        };
    }
};

export const updateTodoService = async (id: number, request: TodoForm): Promise<ApiResponse<Todo | null>> => {
    try {
        const { title, content } = request;
        const result = await todoRepository.updateTodo(id, title, content);
        return {
            status: true,
            data: result,
        };
    } catch (error) {
        return {
            status: false,
            error: error as string,
        };
    }
};

export const deleteTodoService = async (id: number): Promise<ApiResponse<void>> => {
    try {
        await todoRepository.deleteTodo(id);
        return {
            status: true,
        };
    } catch (error) {
        return {
            status: false,
            error: error as string,
        };
    }
};
