import Footer from "@/Components/Frontend/footer";
import Header from "@/Components/Frontend/header/index";
import { Box, Button, Icon, SlideFade, ScaleFade } from "@chakra-ui/react";
import { HiArrowNarrowUp } from "react-icons/hi";
import SkipLink from "@/Components/Frontend/styles/skip-link";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function MainLayout(props) {
    const { experts, url } = usePage();
    const staticExperts = [
        {
            name: "Posh Raj Pandey",
            designation: "Chairman",
            media: [{ original_url: "/assets/PRP.webp" }],
        },
        {
            name: "Paras Kharel",
            designation: "Executive Director",
            media: [{ original_url: "/assets/paras-foto.webp" }],
        },
        {
            name: "Dhrubes C. Regmi",
            designation: "General Secretary",
            media: [{ original_url: "/assets/dhrubesh.webp" }],
        },
        {
            name: "Neelu Thapa",
            designation: "Treasurer",
            media: [{ original_url: "/assets/Neelu-Thapa.webp" }],
        },
        {
            name: "Dikshya Singh",
            designation: "Programme Coordinator",
            media: [{ original_url: "/assets/dikshya.webp" }],
        },
        {
            name: "Kshitiz Dahal",
            designation: "Senior Research Officer",
            media: [{ original_url: "/assets/Kshitiz.webp" }],
        },
    ];
    const { children, ...rest } = props;
    const primarMmenu = [
        {
            title: "Home",
            url: "/",
            children: null,
        },
        {
            title: "Know Us",
            url: "/about",
            children: [
                {
                    title: "Genesis",
                    url: "/about#genesis",
                    children: null,
                },
                {
                    title: "Registration and Recognition",
                    url: "/about#registration-and-recognition",
                    children: null,
                },
                {
                    title: "Governance Structure",
                    url: "/about#governance-structure",
                    children: null,
                },
                {
                    title: "Vision, Goal and Objectives",
                    url: "/about#vision-goal-and-objectives",
                    children: null,
                },
                {
                    title: "Strategies",
                    url: "/about#strategies",
                    children: null,
                },
                {
                    title: "Resources",
                    url: "/about#resources",
                    children: null,
                },
                {
                    title: "Member Institutions",
                    url: "/about#member-institutions",
                    children: null,
                },
            ],
            introText:
                "South Asia Watch on Trade, Economics and Environment (SAWTEE) was launched in 1994 as a loose regional network of non-governmental organizations (NGOs) from five South Asian countries: Bangladesh, India, Nepal, Pakistan and Sri Lanka. Taking into consideration the emerging need for fair, effective and meaningful integration of South Asian countries into the regional as well as global economies, the major motto of this regional initiative has been “GLOBALIZATION YES, BUT WITH SAFETY NETS”",
            introImage: "/assets/Airports_Network_Map.png",
            experts:
                experts && experts.length > 0
                    ? [...experts]
                    : [...staticExperts],
        },
        {
            title: "Our Work",
            url: "/our-work",
            children: [
                // {
                //     title: "Thematic Areas",
                //     url: null,
                //     children: [
                //         {
                //             title: "Economic and social reform, growth and poverty",
                //             url: "/our-work#theme1",
                //             children: null,
                //         },
                //         {
                //             title: "Trade integration and supply-side constrants",
                //             url: "/our-work#theme2",
                //             children: null,
                //         },
                //         {
                //             title: "Trade and climate change",
                //             url: "/our-work#theme3",
                //             children: null,
                //         },
                //         {
                //             title: "Agriculture policies, biodiversity management and food security",
                //             url: "/our-work#theme4",
                //             children: null,
                //         },
                //         {
                //             title: "Competition, regulation and competitiveness",
                //             url: "/our-work#theme5",
                //             children: null,
                //         },
                //         {
                //             title: "Financial resource management",
                //             url: "/our-work#theme6",
                //             children: null,
                //         },
                //         {
                //             title: "Remittance and development",
                //             url: "/our-work#theme7",
                //             children: null,
                //         },
                //         {
                //             title: "Covid-19",
                //             url: "/our-work#theme8",
                //             children: null,
                //         },
                //         {
                //             title: "Advancing LDCs' Trade Interest",
                //             url: "/our-work#theme9",
                //             children: null,
                //         },
                //     ],
                // },
                {
                    title: "Programmes",
                    url: "/category/programmes",
                    children: [
                        {
                            title: "Ongoing Programmes",
                            url: "/category/programmes/ongoing-programmes",
                            children: null,
                        },
                        {
                            title: "Completed Programmes",
                            url: "/category/programmes/completed-programmes",
                            children: null,
                        },
                    ],
                },
                {
                    title: "Research",
                    url: "/category/research",
                    children: null,
                },
            ],
        },
        {
            title: "Publications",
            url: "/category/publications",
            children: null,
        },
        {
            title: "Policy Research",
            url: "/category/featured-events",
            children: null,
        },
    ];
    const footerMenu = [
        {
            title: "Contact Us",
            url: "/contact",
            children: [
                {
                    title: "Phone: +977-1-4544438",
                    url: "tel:+977-1-4544438",
                },
                {
                    title: "Fax: +977-1-4544570",
                    url: "fax:+977-1-4544570",
                },
                {
                    title: "Email: sawtee@sawtee.org",
                    url: "mailto:sawtee@sawtee.org",
                },
                {
                    title: "Address: Tukucha Marg, Baluwatar, Kathmandu",
                    url: null,
                },
                {
                    title: "P.O Box: 19366",
                    url: null,
                },
            ],
        },
        {
            title: "Publications",
            url: "/category/publications",
            children: [
                {
                    title: "Trade Insight",
                    url: "/category/publications/trade-insight",
                },
                {
                    title: "Policy Brief",
                    url: "/category/publications/policy-brief",
                },
                {
                    title: "Books",
                    url: "/category/publications/books",
                },
                {
                    title: "Briefing Paper",
                    url: "/category/publications/briefing-paper",
                },
                {
                    title: "Discussion Paper",
                    url: "/category/publications/discussion-paper",
                },
            ],
        },
        {
            title: "Useful Links",
            url: null,
            children: [
                {
                    title: "InFocus",
                    url: "/category/infocus",
                },
                {
                    title: "Work with Us",
                    url: "/career",
                },
                {
                    title: "Contact Us",
                    url: "/contact",
                },
                {
                    title: "Newsletters",
                    url: "/category/newsletters",
                },
                {
                    title: "SAES",
                    url: "https://sawtee.org/saes",
                },
            ],
        },
    ];
    const socialMenu = [
        {
            name: "twitter",
            link: "https://www.twitter.com/SAWTEENP/",
        },
        {
            name: "facebook",
            link: "https://www.facebook.com/sawteenp/",
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/sawteenp/",
        },
        {
            name: "youtube",
            link: "https://www.youtube.com/@sawteenp/",
        },
    ];
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
