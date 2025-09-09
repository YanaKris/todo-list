import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App integration", () => {
    it("добавляет новую задачу", () => {
        render(<App />);

        const input = screen.getByPlaceholderText(/what needs to be done/i);
        fireEvent.change(input, { target: { value: "Learn testing" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        expect(screen.getByText("Learn testing")).toBeInTheDocument();
    });

    it("переключает статус задачи", () => {
        render(<App />);

        const input = screen.getByPlaceholderText(/what needs to be done/i);
        fireEvent.change(input, { target: { value: "Toggle me" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });

    it("фильтрует задачи", () => {
        render(<App />);

        const input = screen.getByPlaceholderText(/what needs to be done/i);

        fireEvent.change(input, { target: { value: "Active task" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        fireEvent.change(input, { target: { value: "Completed task" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
        fireEvent.click(screen.getAllByRole("checkbox")[1]);

        fireEvent.click(screen.getByRole("button", { name: /active/i }));
        expect(screen.getByText("Active task")).toBeInTheDocument();
        expect(screen.queryByText("Completed task")).not.toBeInTheDocument();
    });

    it("очищает завершённые задачи", () => {
        render(<App />);

        const input = screen.getByPlaceholderText(/what needs to be done/i);
        fireEvent.change(input, { target: { value: "Completed task" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        fireEvent.click(screen.getByRole("checkbox"));
        fireEvent.click(screen.getByRole("button", { name: /clear completed/i }));

        expect(screen.queryByText("Completed task")).not.toBeInTheDocument();
    });
});
