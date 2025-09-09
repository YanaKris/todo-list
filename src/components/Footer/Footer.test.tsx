import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
    const todos = [
        { id: 1, text: "Сделать задание", done: false },
        { id: 2, text: "Купить хлеб", done: true },
        { id: 3, text: "Погулять с собакой", done: false },
    ];

    it("показывает количество оставшихся задач", () => {
        const setFilter = vi.fn();
        const clearCompleted = vi.fn();

        render(
            <Footer
                todos={todos}
                filter="all"
                setFilter={setFilter}
                clearCompleted={clearCompleted}
            />
        );

        expect(screen.getByText("2 items left")).toBeInTheDocument();
    });

    it("вызывает setFilter при клике на кнопки фильтров", () => {
        const setFilter = vi.fn();
        const clearCompleted = vi.fn();

        render(
            <Footer
                todos={todos}
                filter="all"
                setFilter={setFilter}
                clearCompleted={clearCompleted}
            />
        );

        fireEvent.click(screen.getByText("Active"));
        expect(setFilter).toHaveBeenCalledWith("active");

        fireEvent.click(screen.getByText("Completed"));
        expect(setFilter).toHaveBeenCalledWith("completed");

        fireEvent.click(screen.getByText("All"));
        expect(setFilter).toHaveBeenCalledWith("all");
    });

    it("вызывает clearCompleted при клике на кнопку", () => {
        const setFilter = vi.fn();
        const clearCompleted = vi.fn();

        render(
            <Footer
                todos={todos}
                filter="all"
                setFilter={setFilter}
                clearCompleted={clearCompleted}
            />
        );

        fireEvent.click(screen.getByText(/clear completed/i));
        expect(clearCompleted).toHaveBeenCalled();
    });
});
