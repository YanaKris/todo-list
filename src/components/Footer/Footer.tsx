import React from "react";
import {
    Flex,
    Button,
    Text,
    Box,
    Wrap,
    useBreakpointValue,
} from "@chakra-ui/react";

type FlexDirection = "row" | "column";

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


    const flexDirection = useBreakpointValue<FlexDirection>({
        base: "column",
        sm: "row",
    });

    const filterDirection = useBreakpointValue<FlexDirection>({
        base: "column",
        md: "row",
    });

    const spacing = useBreakpointValue({ base: 1, md: 2 });

    return (
        <Box w="100%" maxW="90%" mx="auto" mt={4} px={2}>
            <Flex
                direction={flexDirection}
                justify="space-between"
                align="center"
                fontSize="sm"
                color="gray.500"
                gap={3}
                wrap="wrap"
            >
                <Flex align="center" gap={3}>
                    <Text whiteSpace="nowrap">{remaining} items left</Text>

                    <Wrap spacing={spacing} direction={filterDirection} shouldWrapChildren>
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
                    </Wrap>
                </Flex>

                <Flex
                    direction={flexDirection}
                    wrap={useBreakpointValue({ base: "wrap", sm: "nowrap" })}
                    justify={useBreakpointValue({ base: "center", sm: "flex-end" })}
                    align="center"
                    gap={3}
                >
                    <Button
                        size="sm"
                        variant="ghost"
                        colorScheme="gray"
                        onClick={clearCompleted}
                    >
                        Clear completed
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};