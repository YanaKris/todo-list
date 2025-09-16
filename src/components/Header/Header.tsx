import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Header: React.FC = () => {
    return (
        <Box mb={6}>
            <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeight="black"
                textTransform="uppercase"
                letterSpacing={{ base: "wide", md: "widest" }}
                textAlign="center"
                mb={6}
                sx={{
                    color: "transparent",
                    WebkitTextStroke: "1px gray",
                    paintOrder: "stroke fill",
                }}
            >
                todo list
            </Heading>
        </Box>
    );
};