import React from "react";
import { Flex, Button, HStack, Text, Box } from "@chakra-ui/react";

interface FooterProps {
    todos: { id: number; text: string; done: boolean }[];
    filter: "all" | "active" | "completed";
    setFilter: (filter: "all" | "active" | "completed") => void;
    clearCompleted: () => void;
}

export const Footer: React.FC<FooterProps> = ({
                                                  todos,
                                                  filter,
                                                  setFilter,
                                                  clearCompleted,
                                              }) => {
    const remaining = todos.filter((t) => !t.done).length;

    return (
        <Box
            w="100%"
            maxW={{ base: "90%" }}
            mx="auto"
            mt={4}
            px={2}
        >
            <Flex
                justify="space-between"
                align="center"
                fontSize="sm"
                color="gray.500"
            >
                <Text>{remaining} items left</Text>
                <HStack spacing={2}>
                    <Button
                        size="sm"
                        variant={filter === "all" ? "solid" : "ghost"}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </Button>
                    <Button
                        size="sm"
                        variant={filter === "active" ? "solid" : "ghost"}
                        onClick={() => setFilter("active")}
                    >
                        Active
                    </Button>
                    <Button
                        size="sm"
                        variant={filter === "completed" ? "solid" : "ghost"}
                        onClick={() => setFilter("completed")}
                    >
                        Completed
                    </Button>
                </HStack>
                <Button
                    size="sm"
                    variant="ghost"
                    colorScheme="gray.400"
                    onClick={clearCompleted}
                >
                    Clear completed
                </Button>
            </Flex>
        </Box>
    );
};
