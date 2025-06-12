export interface Todo {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface TodoForm {
    title: string;
    content: string;
}
