import {
    Box,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Icon,
    Image,
    Show,
} from "@chakra-ui/react";
import { ImQuotesLeft } from "react-icons/im";

const TeamMember = ({ member, ...rest }) => {
    const avatar = member.media.filter(
        (media) => media.collection_name === "avatar"
    )[0];
    return (
        <Stack
            direction={{ base: "column", sm: "row" }}
            bgGradient="linear(to-br, accent.800, primary.300)"
            spacing={{ base: 0, sm: 10 }}
            p={{ base: 4, sm: 8 }}
            rounded="lg"
            justifyContent="center"
            {...rest}
        >
            <Show above="sm">
                <Box width="30rem" pos="relative">
                    <Image
                        pos="absolute"
                        rounded="lg"
                        boxSize={"2xl"}
                        src={avatar.original_url}
                        top="-3.8rem"
                        boxShadow="lg"
                        fit={"cover"}
                    />
                </Box>
            </Show>

            <Stack
                direction="column"
                spacing={4}
                textAlign="left"
                maxW="2xl"
                color={useColorModeValue("#000", "gray.200")}
            >
                <Icon as={ImQuotesLeft} w={10} h={10} />
                <Text fontSize="sm" fontWeight="medium">
                    {member.bio}
                </Text>
                <Stack
                    alignItems={{ base: "center", sm: "flex-start" }}
                    spacing={0}
                >
                    <Show below="sm">
                        <Avatar
                            size="xl"
                            showBorder={true}
                            borderColor="blue.400"
                            name="avatar"
                            src={avatar.original_url}
                        />
                    </Show>
                    <Text fontWeight="bold" fontSize="md">
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
