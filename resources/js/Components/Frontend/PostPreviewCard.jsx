import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  LinkBox,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { PostImageWithOverlay } from "@/Components/Frontend/featured-post/components";
import PostCategories from "@/Components/Frontend/post/post-categories";
import { formatDate } from "@/Utils/helpers";
import { GlassBox } from "@/Components/Frontend/index";
import { Link } from "@inertiajs/react";
import InertiaChakraLinkOverlay from "./styles/inertia-chakra-link-overlay";

const PostPreviewCard = ({
  post,
  showImage = false,
  showCategoryTag = false,
  ...rest
}) => {
  const { title, slug, excerpt, media, category, published_at } = post;
  const color = useColorModeValue("gray.600", "gray.300");
  const featured_image = media
    ? media.filter((item) => item.collection_name === "post-featured-image")[0]
    : null;
  return (
    <LinkBox
      as={GlassBox}
      role="group"
      shadow="md"
      rounded="md"
      p={4}
      {...rest}
    >
      {showImage && featured_image && (
        <PostImageWithOverlay
          borderRadius={"0.5rem 0.5rem 0 0"}
          src={featured_image.original_url}
        />
      )}

      <Flex
        mt={showImage ? 4 : 0}
        gap={2}
        justify={"center"}
        direction="column"
      >
        <HStack justifyContent="space-between" alignItems={"center"}>
          {showCategoryTag && (
            <PostCategories
              justify="flex-start"
              category={category}
              mt="0px"
              color={color}
              colorScheme="black"
            />
          )}

          <Box as="time" fontSize={"xs"} color={color}>
            {formatDate(published_at)}
          </Box>
        </HStack>

        <InertiaChakraLinkOverlay
          as={Link}
          href={`/category/${category.slug}/${slug}`}
        >
          <Heading fontSize={{ base: "xs", lg: "sm" }} as="h4">
            {title}
          </Heading>
        </InertiaChakraLinkOverlay>

        <Text
          fontSize={{ base: "xs", lg: "sm" }}
          overflow="hidden"
          textOverflow="ellipsis"
          display="-webkit-box"
          noOfLines="3"
          color={color}
          sx={{
            webkitLineClamp: "3",
            webkitBoxOrient: "vertical",
          }}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </Flex>
    </LinkBox>
  );
};

export default PostPreviewCard;
