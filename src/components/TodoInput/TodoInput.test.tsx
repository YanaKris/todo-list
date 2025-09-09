import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { TodoInput } from "./TodoInput";

describe("TodoInput", () => {
    it("отображает поле ввода", () => {
        const addTodo = vi.fn();
        render(<TodoInput addTodo={addTodo} />);

        expect(screen.getByPlaceholderText(/what needs to be done/i)).toBeInTheDocument();
    });

    it("позволяет вводить текст", () => {
        const addTodo = vi.fn();
        render(<TodoInput addTodo={addTodo} />);

        const input = screen.getByPlaceholderText(/what needs to be done/i) as HTMLInputElement;

        fireEvent.change(input, { target: { value: "Купить хлеб" } });

        expect(input.value).toBe("Купить хлеб");
    });

    it("вызывает addTodo и очищает поле при нажатии Enter", () => {
        const addTodo = vi.fn();
        render(<TodoInput addTodo={addTodo} />);

        const input = screen.getByPlaceholderText(/what needs to be done/i) as HTMLInputElement;

        fireEvent.change(input, { target: { value: "Сделать домашку" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        expect(addTodo).toHaveBeenCalledWith("Сделать домашку");
        expect(input.value).toBe(""); // поле очистилось
    });

    it("не вызывает addTodo, если введены только пробелы", () => {
        const addTodo = vi.fn();
        render(<TodoInput addTodo={addTodo} />);

        const input = screen.getByPlaceholderText(/what needs to be done/i) as HTMLInputElement;

        fireEvent.change(input, { target: { value: "   " } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        expect(addTodo).not.toHaveBeenCalled();
    });
});
