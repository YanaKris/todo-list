import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TodoItem } from './TodoItem';

describe('TodoItem', () => {
    it('отображает текст задачи и чекбокс', () => {
        const todo = { id: 1, text: 'Пример задачи', done: false };
        const toggle = vi.fn();
        const del = vi.fn();

        render(<TodoItem id={todo.id} text={todo.text} done={todo.done} onToggle={toggle} onDelete={del} />);

        expect(screen.getByText('Пример задачи')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('вызывает toggle при клике на чекбокс', () => {
        const todo = { id: 1, text: 'Пример задачи', done: false };
        const toggle = vi.fn();
        const del = vi.fn();

        render(<TodoItem id={todo.id} text={todo.text} done={todo.done} onToggle={toggle} onDelete={del} />);

        fireEvent.click(screen.getByRole('checkbox'));
        expect(toggle).toHaveBeenCalledWith(1);
    });

    it('вызывает delete при клике на кнопку удаления', () => {
        const todo = { id: 1, text: 'Пример задачи', done: false };
        const toggle = vi.fn();
        const del = vi.fn();

        render(<TodoItem id={todo.id} text={todo.text} done={todo.done} onToggle={toggle} onDelete={del} />);

        fireEvent.click(screen.getByLabelText(/удалить задачу/i));
        expect(del).toHaveBeenCalledWith(1);
    });

    it('если задача выполнена, текст задачи зачеркивается', () => {
        const todo = { id: 1, text: 'Задача 1', done: true };
        const toggle = vi.fn();
        const del = vi.fn();

        render(<TodoItem id={todo.id} text={todo.text} done={todo.done} onToggle={toggle} onDelete={del} />);

        const textElement = screen.getByText('Задача 1');
        expect(textElement).toHaveStyle('text-decoration: line-through');
    });
});