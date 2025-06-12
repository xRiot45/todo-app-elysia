import { Todo, TodoForm } from '../interfaces/todo.interface';
import * as todoService from '../services/todo.service';
import { ApiResponse } from '../types';

export const findAllTodosController = async (): Promise<ApiResponse<Todo[]>> => {
    return await todoService.findAllTodosService();
};

export const createTodoController = async ({ body }: { body: TodoForm }): Promise<ApiResponse<Todo | null>> => {
    return await todoService.createTodoService(body);
};

export const findTodoByIdController = async ({
    params,
}: {
    params: { id: number };
}): Promise<ApiResponse<Todo | null>> => {
    return await todoService.findTodoByIdService(params.id);
};

export const updateTodoController = async ({
    params,
    body,
}: {
    params: { id: number };
    body: TodoForm;
}): Promise<ApiResponse<Todo | null>> => {
    return await todoService.updateTodoService(params.id, body);
};
