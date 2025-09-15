import React from "react";
import { Box } from "@chakra-ui/react";

export const Header: React.FC = () => {
    return (
        <Box mb={6} textAlign="center">
            <svg
                width="100%"
                viewBox="0 0 800 200" // адаптируй под нужный размер
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                }}
            >
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="none" // ← ВАЖНО: без заливки
                    stroke="gray" // ← цвет обводки
                    strokeWidth="2" // ← толщина обводки
                    fontWeight="900"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                    style={{
                        fontSize: "clamp(2rem, 8vw, 5rem)", // адаптивный размер
                        fontFamily: "inherit", // наследуем шрифт от Chakra
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                    }}
                >
                    todo list
                </text>
            </svg>
        </Box>
    );
};