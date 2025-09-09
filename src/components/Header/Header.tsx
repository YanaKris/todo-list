import React from "react";
import {Box, Heading} from "@chakra-ui/react";

export const Header: React.FC = () => {
    return (
        <Box mb={6}>
            <Heading   as="h1"
                       fontSize={{ base: "3xl", md: "5xl" }}
                       fontWeight="black"
                       //color="gray.500"
                       textTransform="uppercase"
                       letterSpacing="widest"
                       textAlign="center"
                       mb={6}
                       color="transparent"
                       sx={{
                           WebkitTextStroke: "1px gray", // толщина и цвет обводки
                       }}>

                todo list
            </Heading>
        </Box>
    );
};