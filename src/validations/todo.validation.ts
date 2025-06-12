import { t } from 'elysia';

export const todoValidation = t.Object({
    title: t.String(),
    content: t.String(),
});

export const todoParamsValidation = t.Object({
    id: t.Number(),
});
