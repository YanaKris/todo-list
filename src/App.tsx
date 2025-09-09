import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

type Filter = "all" | "active" | "completed";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<Filter>("all");

    const addTodo = (text: string) => {
        setTodos([...todos, { id: Date.now(), text, done: false }]);
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.done));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.done;
        if (filter === "completed") return todo.done;
        return true;
    })

    return (
        <ChakraProvider>
            <Flex
                w="100vw"
                minH="100vh"
                flexDirection="column"
                align="center"
                bg="gray.50"
                p={4}
            >
                <Box w="100%" maxW={{ base: "90%", sm: "60%", md: "40%" }}>
                    <Box py={4}>
                        <Header />
                    </Box>
                    <Box
                        w="100%"
                        bg="white"
                        p={6}
                        rounded="xl"
                        shadow="md"
                    >
                        <VStack spacing={6} align="stretch">
                            <TodoInput addTodo={addTodo} />
                            <TodoList
                                todos={filteredTodos}
                                toggleTodo={toggleTodo}
                                deleteTodo={deleteTodo}
                            />
                        </VStack>
                    </Box>
                    <Footer
                        todos={todos}
                        filter={filter}
                        setFilter={setFilter}
                        clearCompleted={clearCompleted}
                    />
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

export default App;