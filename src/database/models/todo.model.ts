import { int, mysqlTable, text, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const todos = mysqlTable('todos', {
    id: int('id').primaryKey().autoincrement(),
    title: varchar('title', { length: 50 }).notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});
