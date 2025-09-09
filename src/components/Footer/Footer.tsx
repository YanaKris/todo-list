import React from "react";
import {
    Flex,
    Button,
    HStack,
    Text,
    Box,
    Stack,
    useBreakpointValue,
} from "@chakra-ui/react";

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

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box w="100%" maxW="90%" mx="auto" mt={4} px={2}>
            <Stack
                direction={isMobile ? "column" : "row"}
                justify="space-between"
                align={isMobile ? "flex-start" : "center"}
                spacing={isMobile ? 3 : 0}
                fontSize="sm"
                color="gray.500"
            >
                <Flex align="center" gap={2}>
                    <Text>{remaining} items left</Text>
                    <HStack spacing={1}>
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
                </Flex>
                <Button
                    size="sm"
                    variant="ghost"
                    colorScheme="gray"
                    onClick={clearCompleted}
                >
                    Clear completed
                </Button>
            </Stack>
        </Box>
    );
};