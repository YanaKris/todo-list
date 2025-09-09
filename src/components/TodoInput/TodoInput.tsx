import React, { useState } from "react";
import { HStack, Input } from "@chakra-ui/react";

interface TodoInputProps {
    addTodo: (text: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleAdd = () => {
        if (value.trim() !== "") {
            addTodo(value);
            setValue(""); // очищаем поле ввода
        }
    };

    return (
        <HStack justify="stretch" w="97%" >
            <Input
                placeholder="What needs to be done?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            />
            {/*<Button colorScheme="teal" onClick={handleAdd}>*/}
            {/*    Добавить*/}
            {/*</Button>*/}
        </HStack>
    );
};