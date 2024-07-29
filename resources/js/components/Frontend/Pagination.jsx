import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Stack } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import PrimaryButton from '../Backend/PrimaryButton';
import { Button } from "../ui/button";
import InertiaChakraLink from "./styles/inertia-chakra-link";

const PaginationButton = ({
    link,
    isDisabled,
    label = "",
    icon,
    slot,
    children,
    ...rest
}) => {
    return (
        <Link
            className="w-full group"
            href={link}
            aria-disabled={isDisabled}
            {...rest}
        >
            <Button
                aria-label={label}
                isDisabled={isDisabled}
                variant="outline"
                size="lg"
                className="w-full dark:text-white dark:bg-bgDarker dark:border-borderColor"
            >
                {slot === "before" && children}
                <span>{label}</span>
                {slot === "after" && children}
            </Button>
        </Link>
    );
};

const Pagination = ({ links, prevPage, nextPage, currentPage, totalPages }) => {
    return (
        <div className="flex w-full gap-10">
            <PaginationButton
                link={prevPage}
                label="Older posts"
                isDisabled={!prevPage}
                slot="before"
            >
                <ArrowBackIcon className="mr-3 md:mr-4 opacity-0 translate-x-[100%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-100 ease-in w-8 h-8" />
            </PaginationButton>
            <PaginationButton
                link={nextPage}
                label="Newer Posts"
                slot="after"
                isDisabled={!nextPage}
            >
                <ArrowForwardIcon className="ml-3 md:ml-4 opacity-0 -translate-x-[100%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-100 ease-in" />
            </PaginationButton>
        </div>
    );
};

export default Pagination;
