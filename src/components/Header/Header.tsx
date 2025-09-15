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
                    fontFamily: '"Courier New", monospace', // ← ключевой момент!
                    textShadow: `
                        -1px -1px 0 gray,
                        1px -1px 0 gray,
                        -1px 1px 0 gray,
                        1px 1px 0 gray,
                        0px 1px 0 gray,
                        0px -1px 0 gray,
                        -1px 0px 0 gray,
                        1px 0px 0 gray
                    `,
                }}
            >
                todo list
            </Heading>
        </Box>
    );
};