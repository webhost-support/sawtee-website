import styled from "@emotion/styled";
import { Link } from "@inertiajs/react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Box, Stack, Button } from "@chakra-ui/react";

export const PaginationButton = styled(Button)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    // padding: 0.8rem 1rem;
    // min-height: 50px;
`;

export const PrevLink = ({
    isDisabled,
    label = "See older posts",
    link,
    ...rest
}) => (
    <Box width="100%" role="group" {...rest}>
        <StyledLink href={link} aria-disabled={isDisabled}>
            <PaginationButton
                colorScheme={"primary"}
                aria-label={label}
                isDisabled={isDisabled}
                variant="outline"
            >
                <Box
                    className="icon"
                    boxSize="30px"
                    height="auto"
                    as={IoIosArrowRoundBack}
                    _groupHover={{ transform: "translateX(-10px)" }}
                />
                <span>Newer posts</span>
            </PaginationButton>
        </StyledLink>
    </Box>
);

export const NextLink = ({ isDisabled, label = "See newer posts", link, ...rest }) => (
    <Box width="100%" role="group" {...rest}>
        <StyledLink href={link} aria-disabled={isDisabled}>
            <PaginationButton
                colorScheme={"primary"}
                aria-label={label}
                isDisabled={isDisabled}
                variant="outline"
            >
                <span>Older posts</span>
                <Box
                    className="icon"
                    boxSize="30px"
                    height="auto"
                    as={IoIosArrowRoundForward}
                    _groupHover={{ transform: "translateX(10px)" }}
                />
            </PaginationButton>
        </StyledLink>
    </Box>
);

const Pagination = ({
    links,
    prevPage,
    nextPage,
    currentPage,
    totalPages,
    ...rest
}) => {
    return (
        <Stack direction="row" spacing="40px" {...rest}>
            <PrevLink link={prevPage} isDisabled={!prevPage} />
            <NextLink link={nextPage} isDisabled={!nextPage} />
        </Stack>
    );
};

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default Pagination;
