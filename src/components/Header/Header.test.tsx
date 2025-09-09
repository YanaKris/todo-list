import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
    it("рендер заголовка todo list", () => {
        render(<Header />);
        expect(screen.getByRole("heading", { name: /todo list/i })).toBeInTheDocument();
    });
});