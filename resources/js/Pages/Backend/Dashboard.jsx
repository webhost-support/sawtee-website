import AuthenticatedLayout from "@/Pages/Backend/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import {
    Alert,
    AlertIcon,
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { FiBook, FiFileText, FiTrendingUp } from "react-icons/fi";

export default function Dashboard({
    auth,
    posts,
    categories,
    publications,
    researchs,
    users,
}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <Box maxW="7xl" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }}>
                {auth.user.email_verified_at == null && (
                    <Alert
                        status="warning"
                        variant="left-accent"
                        fontSize={"sm"}
                        mb={3}
                    >
                        <AlertIcon />
                        <Text fontWeight={"bold"}>
                            Seems like you have not verified your email
                            address,&nbsp;
                        </Text>
                        <Text>
                            please verify your email by clicking the
                            verification link sent to your email(
                            {auth.user.email}).
                        </Text>
                    </Alert>
                )}

                <chakra.h1 fontSize={"3xl"} pb={10} fontWeight={"bold"}>
                    Hello, {auth.user.name}.
                </chakra.h1>

                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={{ base: 5, lg: 8 }}
                >
                    <StatsCard
                        title={"posts"}
                        stat={posts}
                        icon={<FiTrendingUp size="2em" />}
                    />
                    <StatsCard
                        title={"publications"}
                        stat={publications}
                        icon={<FiBook size="2em" />}
                    />
                    <StatsCard
                        title={"Research"}
                        stat={researchs}
                        icon={<FiFileText size="2em" />}
                    />
                </SimpleGrid>
            </Box>
        </AuthenticatedLayout>
    );
}

const StatsCard = ({ title, stat, icon }) => {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={"5"}
            shadow={"xl"}
            border={"1px solid"}
            borderColor={useColorModeValue("gray.800", "gray.500")}
            rounded={"lg"}
        >
            <Flex justifyContent={"space-between"}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel
                        fontWeight="medium"
                        fontSize="xl"
                        textTransform={"uppercase"}
                        isTruncated
                    >
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={"xl"} fontWeight={"semibold"}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={"auto"}
                    color={useColorModeValue("gray.800", "gray.200")}
                    alignContent={"center"}
                >
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
};
