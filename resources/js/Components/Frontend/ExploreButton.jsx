import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import InertiaChakraLink from "./styles/inertia-chakra-link";

export const ExploreButton = ({ text = "Explore All", link, ...rest }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<InertiaChakraLink as={Link} href={link ? link : "#"}>
			<Button
				variant={"link"}
				colorScheme={"primary"}
				aria-label={text}
				fontWeight={"normal"}
				onMouseEnter={() => setHovered(!hovered)}
				onMouseLeave={() => hovered && setHovered(!hovered)}
				rightIcon={hovered ? <ArrowForwardIcon /> : <ChevronRightIcon />}
				href={link ? link : "#"}
				size={"sm"}
				{...rest}
			>
				{text}
			</Button>
		</InertiaChakraLink>
	);
};
