import { Box, chakra } from "@chakra-ui/react";

const SvgText = chakra("text");

export const Header: React.FC = () => {
    return (
        <Box mb={6} textAlign="center">
            <chakra.svg
                width="100%"
                viewBox="0 0 800 200"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                sx={{ maxWidth: "100%", height: "auto" }}
            >
                <SvgText
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    fontWeight="900"
                    style={{
                        fontSize: "clamp(2rem, 8vw, 5rem)",
                        fontFamily: "inherit", // или "heading", если используешь тему
                        textTransform: "uppercase", // ← CSS-свойство → только в style
                        letterSpacing: "0.2em",
                    }}
                >
                    todo list
                </SvgText>
            </chakra.svg>
        </Box>
    );
};