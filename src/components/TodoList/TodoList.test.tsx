import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TodoList } from "./TodoList";

const todos = [
    { id: 1, text: "Задача 1", done: false },
    { id: 2, text: "Задача 2", done: true },
];

describe("TodoList", () => {
    it("отображает все задачи", () => {
        render(<TodoList todos={todos} toggleTodo={() => {}} deleteTodo={() => {}} />);

        expect(screen.getByText("Задача 1")).toBeInTheDocument();
        expect(screen.getByText("Задача 2")).toBeInTheDocument();
    });

    it("вызывает toggleTodo при клике на чекбокс", () => {
        const toggle = vi.fn();
        render(<TodoList todos={todos} toggleTodo={toggle} deleteTodo={() => {}} />);

        fireEvent.click(screen.getAllByRole("checkbox")[0]);

        expect(toggle).toHaveBeenCalledWith(1);
    });

    it("вызывает deleteTodo при клике на кнопку удаления", () => {
        const del = vi.fn();
        render(<TodoList todos={todos} toggleTodo={() => {}} deleteTodo={del} />);

        fireEvent.click(screen.getAllByLabelText(/удалить задачу/i)[0]);

        expect(del).toHaveBeenCalledWith(1);
    });
});