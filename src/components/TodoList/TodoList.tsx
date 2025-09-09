import React from "react";
import { VStack} from "@chakra-ui/react";
import { TodoItem} from "../TodoItem";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <VStack spacing={3} align="stretch">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                />
            ))}
        </VStack>
    );
};