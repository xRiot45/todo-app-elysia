import { eq } from 'drizzle-orm';
import { db } from '../configs/database.config';
import { todos } from '../database/models/todo.model';
import { Todo } from '../interfaces/todo.interface';

export const findAllTodos = async (): Promise<Todo[]> => {
    return db.select().from(todos);
};

export const createTodo = async (title: string, content: string): Promise<Todo | null> => {
    const result = await db.insert(todos).values({
        title,
        content,
    });

    const insertId = result[0]?.insertId;
    if (insertId) {
        const [newTodo] = await db.select().from(todos).where(eq(todos.id, insertId));
        return newTodo;
    }

    return null;
};

export const findTodoById = async (id: number): Promise<Todo | null> => {
    const result = await db.select().from(todos).where(eq(todos.id, id));
    return result[0] ?? null;
};

export const updateTodo = async (id: number, title: string, content: string): Promise<Todo | null> => {
    await db.update(todos).set({ title, content }).where(eq(todos.id, id));
    return findTodoById(id);
};
