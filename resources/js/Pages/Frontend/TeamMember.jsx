import {
    Box,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Icon,
    Image,
} from "@chakra-ui/react";
import { ImQuotesLeft } from "react-icons/im";

const TeamMember = ({ member, ...rest }) => {
    const avatar = member.media.filter(
        (media) => media.collection_name === "avatar"
    )[0];
    return (
        <Stack
            direction={{ base: "column", sm: "row" }}
            bgGradient="linear(to-br, accent.800, blue.300)"
            spacing={{ base: 0, sm: 10 }}
            p={{ base: 4, sm: 8 }}
            rounded="lg"
            justifyContent="center"
            {...rest}
        >
            <Box
                maxWidth="xs"
                w="30rem"
                pos="relative"
                display={{ base: "none", sm: "block" }}
            >
                <Image
                    pos="absolute"
                    rounded="lg"
                    src={avatar.original_url}
                    top="0"
                    _hover={{
                        top: "-3.8rem",
                        transition: "all 0.2s ease-in",
                    }}
                    boxShadow="lg"
                />
            </Box>

            <Stack direction="column" spacing={4} textAlign="left" maxW="3xl">
                <Icon
                    as={ImQuotesLeft}
                    w={10}
                    h={10}
                    color={useColorModeValue("gray.300", "gray.200")}
                />
                <Text
                    fontSize="md"
                    fontWeight="medium"
                    color={useColorModeValue("gray.300", "gray.200")}
                >
                    {member.bio}
                </Text>
                <Stack
                    alignItems={{ base: "center", sm: "flex-start" }}
                    spacing={0}
                >
                    <Avatar
                        size="xl"
                        showBorder={true}
                        borderColor="green.400"
                        name="avatar"
                        src={avatar.original_url}
                        display={{ base: "block", sm: "none" }}
                    />
                    <Text fontWeight="bold" fontSize="lg">
                        {member.name}
                    </Text>
                    <Text fontWeight="medium" fontSize="sm">
                        {member.designation}, {"SAWTEE"}
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default TeamMember;
