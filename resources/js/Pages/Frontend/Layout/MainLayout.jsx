import Footer from "@/Components/Frontend/footer";
import Header from "@/Components/Frontend/header/index";
import { Box, Button, Icon, SlideFade, ScaleFade } from "@chakra-ui/react";
import { HiArrowNarrowUp } from "react-icons/hi";
import SkipLink from "@/Components/Frontend/styles/skip-link";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { primarMmenu, footerMenu, socialMenu } from "@/Utils/data";

export default function MainLayout(props) {
    const { experts, url } = usePage();
    const { children, ...rest } = props;
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 570) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        if (experts) primarMmenu.experts = [...experts];
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <SkipLink
                as="button"
                className="skip-link"
                onClick={(e) => handleClick(e)}
            >
                Skip to main content
            </SkipLink>

            <Header menu={primarMmenu} />
            <ScaleFade in={url} initialScale={0.9}>
                <Box as="main" {...rest}>
                    {children}
                </Box>
            </ScaleFade>
            <Footer menu={footerMenu} socialMenu={socialMenu} />
            <SlideFade in={visible} offsetY="40px">
                <Box
                    as={Button}
                    pos={"fixed"}
                    width={"50px"}
                    height={"50px"}
                    rounded={"full"}
                    cursor={"pointer"}
                    shadow={"lg"}
                    right={"40px"}
                    bottom={"40px"}
                    zIndex={"100"}
                    transform={"translateY(-60px)"}
                    transition="all 0.5s ease-in-out"
                    colorScheme={"primary"}
                    aria-label="scroll to top"
                    onClick={scrollToTop}
                >
                    <Icon as={HiArrowNarrowUp} className="scroll-icon" />
                </Box>
            </SlideFade>
        </>
    );
}
