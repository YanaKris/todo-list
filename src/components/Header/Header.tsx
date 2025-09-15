import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Header: React.FC = () => {
    return (
        <Box mb={6}>
            <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="black"
                textTransform="uppercase"
                letterSpacing="widest"
                textAlign="center"
                mb={6}
                color="transparent"
                sx={{
                    color: "transparent",
                    WebkitTextStroke: "1px gray",
                    paintOrder: "stroke fill", // ← сначала обводка, потом заливка
                    strokeWidth: 1,
                }}
            >
                todo list
            </Heading>
        </Box>
    );
};