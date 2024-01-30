import { Button, Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
// import { IoMoon, IoSunny } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const ToggleDiv = motion(Box);

const ThemeToggle = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        /**
         * Ideally, only the button component should be used (without Flex).
         * Props compatible with <Button /> are supported.
         */
        <AnimatePresence mode="wait" initial={false}>
            <ToggleDiv
                display="inline-block"
                key={useColorModeValue("light", "dark")}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Button
                    aria-label="Toggle Color Mode"
                    onClick={toggleColorMode}
                    _focus={{ boxShadow: "none" }}
                    variant="ghost"
                    {...props}
                    size='sm'
                >
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
            </ToggleDiv>
        </AnimatePresence>
    );
};

export default ThemeToggle;
