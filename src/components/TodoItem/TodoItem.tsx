import React from "react";
import { Checkbox, HStack, IconButton, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface TodoItemProps {
    id: number;
    text: string;
    done: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
                                                      id,
                                                      text,
                                                      done,
                                                      onToggle,
                                                      onDelete,
                                                  }) => {
    return (
        <HStack
            role="group"
            justify="space-between"
            w="100%"
            px={2}
            py={1}
            borderBottom="1px solid #eee"
            _hover={{ bg: "gray.50" }}
            rounded="md"
        >
            <Checkbox isChecked={done} onChange={() => onToggle(id)}>
                <Text ml={2} as={done ? "s" : undefined}>
                    {text}
                </Text>
            </Checkbox>

            <IconButton
                aria-label="Удалить задачу"
                icon={<DeleteIcon />}
                onClick={() => onDelete(id)}
                size="sm"
                variant="ghost"
                color="red.500"
                display="none"
                _groupHover={{ display: "inline-flex" }}
            />
        </HStack>
    );
};