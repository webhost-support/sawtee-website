import PrimaryButton from "@/Components/Backend/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Radio,
    Select,
    Stack,
    Textarea,
    VStack,
    IconButton,
    useToast,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Tooltip,
    useColorModeValue,
    InputRightElement,
    Text,
} from "@chakra-ui/react";
import FileUpload, { PreviewImage } from "@/Components/Backend/FileUpload";
import ContentEditor from "@/Components/Backend/ContentEditor";
import React from "react";
import { FiFile } from "react-icons/fi";
import { CheckIcon, CloseIcon, CopyIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import ControlledMultiSelect from "@/Components/Backend/MultiSelect";
import { useClipboard } from "@chakra-ui/react";

export default function CreatePostForm({ categories, themes, tags }) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: "",
        theme_id: "",
        title: "",
        slug: "",
        content: "",
        excerpt: "",
        author: "",
        status: "unpublished",
        image: "",
        file: "",
        link: null,
        genre: "",
        published_at: new Date(),
        meta_title: "",
        meta_description: "",
    });
    const toast = useToast();
    const [filename, setFilename] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [slug, setSlug] = React.useState("");
    const { onCopy, value, setValue, hasCopied } = useClipboard("");
    const [postTags, setPostTags] = React.useState([]);

    const [tagOptions, setTagOptions] = React.useState(() => {
        let tagsarray = [];
        tags.map((tag) => {
            tagsarray.push({
                value: tag.id,
                label: tag.name,
            });
        });

        return tagsarray;
    });

    // Set Slug if title value changes
    // React.useEffect(() => {
    //     if (data.title.length > 0) {
    //         setSlug(data.title.toLowerCase().replace(/\s+/g, "-")).replaceAll(
    //             ",",
    //             ""
    //         );
    //         setData("slug", slug);
    //     }
    // }, [data.title]);

    function setDataTags(e) {
        let array = [];
        setPostTags(e);
        e.forEach((item) =>
            array.push({
                tag_id: item.value,
                post_id: item.id,
            })
        );

        setData("tags", array);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.posts.store"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () =>
                toast({
                    position: "top-right",
                    title: "Post Created.",
                    description: `${data.title} post Successfully`,
                    status: "success",
                    duration: 6000,
                    isClosable: true,
                }),
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <form onSubmit={submit}>
            <Grid
                templateColumns={{
                    base: "1fr",
                    xl: "repeat(7, minmax(auto, 1fr))",
                }}
                autoRows={"auto"}
                gap={8}
            >
                <GridItem colSpan={{ base: 1, xl: 5 }}>
                    <VStack spacing={8} position={"sticky"} top={"2rem"}>
                        <FormControl isInvalid={errors.title} isRequired>
                            <FormLabel htmlFor="title">Title</FormLabel>
                            <Input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Add Post title here"
                                display="flex"
                                mt={1}
                                autoComplete="title"
                                onChange={(e) => {
                                    setData("title", e.target.value);
                                    setSlug(
                                        e.target.value
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")
                                    ).replaceAll(",", "");
                                }}
                            />

                            {errors.title && (
                                <FormErrorMessage mt={2}>
                                    {errors.title}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl>
                            <Stack
                                flexDir={"row"}
                                align="center"
                                justify="space-between"
                            >
                                <FormLabel htmlFor="slug">Slug</FormLabel>
                                <Text
                                    as="span"
                                    fontSize="xs"
                                    fontStyle="italic"
                                >
                                    Click to copy
                                </Text>
                            </Stack>

                            <InputGroup>
                                <InputRightElement>
                                    <Button
                                        variant="ghost"
                                        size={"sm"}
                                        onClick={onCopy}
                                    >
                                        {hasCopied ? (
                                            <CheckIcon color={"green.500"} />
                                        ) : (
                                            <CopyIcon color={"gray.500"} />
                                        )}
                                    </Button>
                                </InputRightElement>
                                <Input
                                    type="text"
                                    id="slug"
                                    isReadOnly
                                    name="slug"
                                    color={useColorModeValue(
                                        "blue.600",
                                        "blue.300"
                                    )}
                                    value={slug}
                                    display="flex"
                                    alignItems="center"
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4} isInvalid={errors.content}>
                            <FormLabel htmlFor="content">Content</FormLabel>

                            <ContentEditor
                                name="content"
                                id="content"
                                onChange={(evt, editor) =>
                                    setData("content", editor.getContent())
                                }
                            />

                            {errors.content && (
                                <FormErrorMessage mt={2}>
                                    {errors.content}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={errors.excerpt}>
                            <FormLabel htmlFor="excerpt">
                                Excerpt/Short Description
                            </FormLabel>

                            <Textarea
                                id="excerpt"
                                name="excerpt"
                                display="flex"
                                isInvalid={errors.excerpt}
                                resize={"vertical"}
                                placeholder="Short Description"
                                rows={6}
                                mt={1}
                                autoComplete="excerpt"
                                onChange={(e) =>
                                    setData("excerpt", e.target.value)
                                }
                            />

                            {errors.title && (
                                <FormErrorMessage mt={2}>
                                    {errors.title}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </VStack>
                </GridItem>
                <GridItem colSpan={{ base: 1, xl: 2 }}>
                    <VStack spacing={8}>
                        <Accordion allowToggle w="full">
                            <AccordionItem>
                                <h2>
                                    <AccordionButton
                                        _expanded={{
                                            bg: "gray.600",
                                            color: "white",
                                        }}
                                    >
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                            fontWeight={"semibold"}
                                        >
                                            {"SEO Meta Tags "}
                                            <Tooltip
                                                label="Add title and description for SEO"
                                                fontSize="xs"
                                            >
                                                <QuestionOutlineIcon
                                                    boxSize={3}
                                                />
                                            </Tooltip>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <VStack gap="6" alignItems={"start"}>
                                        <FormControl
                                            mt="4"
                                            isInvalid={errors.meta_title}
                                        >
                                            <FormLabel htmlFor="meta_title">
                                                Meta Title
                                            </FormLabel>

                                            <Input
                                                id="meta_title"
                                                name="meta_title"
                                                placeholder="enter meta title"
                                                onChange={(e) =>
                                                    setData(
                                                        "meta_title",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <FormErrorMessage
                                                message={errors.meta_title}
                                                className="mt-2"
                                            />
                                        </FormControl>

                                        <FormControl
                                            mt="4"
                                            isInvalid={errors.meta_description}
                                        >
                                            <FormLabel htmlFor="meta_description">
                                                Meta Description
                                            </FormLabel>

                                            <Textarea
                                                id="meta_description"
                                                name="meta_description"
                                                placeholder="enter meta_description"
                                                rows={3}
                                                resize="vertical"
                                                onChange={(e) =>
                                                    setData(
                                                        "meta_description",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <FormErrorMessage
                                                message={
                                                    errors.meta_description
                                                }
                                                className="mt-2"
                                            />
                                        </FormControl>
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        <FormControl
                            isInvalid={errors.category_id}
                            isRequired
                            as="fieldset"
                        >
                            <FormLabel as="legend" htmlFor="category_id">
                                Category
                            </FormLabel>

                            <Select
                                name="category_id"
                                placeholder="Select Category"
                                onChange={(e) => {
                                    setData("category_id", e.target.value);

                                    setSelectedCategory(
                                        categories.filter(
                                            (cat) => cat.id == e.target.value
                                        )[0].name
                                    );
                                }}
                            >
                                {categories &&
                                    categories.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                            </Select>

                            {errors.category_id && (
                                <FormErrorMessage mt={2}>
                                    {errors.category_id}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={errors.published_at}>
                            <FormLabel as="legend" htmlFor="published_at">
                                Published At
                            </FormLabel>

                            <Input
                                type="date"
                                id="published_at"
                                name="published_at"
                                onChange={(e) =>
                                    setData("published_at", e.target.value)
                                }
                            />

                            {errors.published_at && (
                                <FormErrorMessage mt={2}>
                                    {errors.published_at}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        {selectedCategory !== "Covid" && (
                            <FormControl
                                isInvalid={errors.theme_id}
                                as="fieldset"
                            >
                                <FormLabel as="legend" htmlFor="theme_id">
                                    Theme
                                </FormLabel>

                                <Select
                                    name="theme_id"
                                    placeholder="Select theme"
                                    onChange={(e) => {
                                        setData("theme_id", e.target.value);
                                    }}
                                >
                                    {themes &&
                                        themes.map((theme) => (
                                            <option
                                                key={theme.id}
                                                value={theme.id}
                                            >
                                                {theme.title}
                                            </option>
                                        ))}
                                </Select>

                                {errors.theme_id && (
                                    <FormErrorMessage mt={2}>
                                        {errors.theme_id}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        )}
                        {selectedCategory !== "Covid" && (
                            <FormControl py={4} id={"tags"}>
                                <FormLabel htmlFor="tags">
                                    {" Add Tags"}
                                </FormLabel>

                                <ControlledMultiSelect
                                    isMulti
                                    name={"tags"}
                                    options={tagOptions}
                                    variant="filled"
                                    tagVariant="solid"
                                    placeholder="Select Tags"
                                    value={postTags}
                                    onChange={(e) => {
                                        setPostTags(e);
                                        setDataTags(e);
                                    }}
                                    selectedOptionColorScheme="blue"
                                />
                            </FormControl>
                        )}
                        <FormControl
                            mt={4}
                            isInvalid={errors.status}
                            isRequired
                            as="fieldset"
                        >
                            <FormLabel as="legend" htmlFor="status">
                                Status
                            </FormLabel>

                            <Stack
                                direction="row"
                                flexWrap={"wrap"}
                                spacing={4}
                            >
                                {["unpublished", "draft", "published"].map(
                                    (item) => {
                                        return (
                                            <Radio
                                                key={item}
                                                name="status"
                                                isChecked={data.status === item}
                                                value={item}
                                                onChange={(e) => {
                                                    setData(
                                                        "status",
                                                        e.target.value
                                                    );
                                                }}
                                            >
                                                {item}
                                            </Radio>
                                        );
                                    }
                                )}
                            </Stack>

                            {errors.status && (
                                <FormErrorMessage mt={2}>
                                    {errors.status}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={errors.author} mt={4}>
                            <FormLabel htmlFor="author">
                                {"Author/s "}
                                <Tooltip
                                    label="Add author name, if multple authors use comma seperated format. Eg: Paras Kharel, Dikshya Singh, Kshitiz Dahal"
                                    fontSize="xs"
                                    float={"right"}
                                >
                                    <QuestionOutlineIcon boxSize={3} />
                                </Tooltip>
                            </FormLabel>

                            <Input
                                type="text"
                                id="author"
                                name="author"
                                display="block"
                                placeholder="Add author full name"
                                w="full"
                                mt={1}
                                autoComplete="author"
                                onChange={(e) =>
                                    setData("author", e.target.value)
                                }
                            />

                            {errors.author && (
                                <FormErrorMessage mt={2}>
                                    {errors.author}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        {selectedCategory === "Covid" && (
                            <FormControl isInvalid={errors.genre} mt={4}>
                                <FormLabel htmlFor="genre">Genre</FormLabel>

                                <Input
                                    type="text"
                                    id="genre"
                                    name="genre"
                                    display="block"
                                    w="full"
                                    mt={1}
                                    autoComplete="genre"
                                    onChange={(e) =>
                                        setData("genre", e.target.value)
                                    }
                                />

                                {errors.genre && (
                                    <FormErrorMessage mt={2}>
                                        {errors.genre}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        )}

                        {selectedCategory === "Covid" && (
                            <FormControl isInvalid={errors.link} mt={4}>
                                <FormLabel htmlFor="link">
                                    External Link
                                </FormLabel>

                                <Input
                                    type="text"
                                    id="link"
                                    name="link"
                                    display="block"
                                    w="full"
                                    mt={1}
                                    autoComplete="link"
                                    onChange={(e) =>
                                        setData("link", e.target.value)
                                    }
                                />

                                {errors.author && (
                                    <FormErrorMessage mt={2}>
                                        {errors.author}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        )}

                        <FormControl mt={4}>
                            <FormLabel htmlFor="image">
                                Featured Image
                            </FormLabel>

                            {image && (
                                <>
                                    <PreviewImage src={image} />
                                    <Button
                                        mt={4}
                                        size={"sm"}
                                        colorScheme="red"
                                        onClick={() => {
                                            setImage(null);
                                        }}
                                    >
                                        Remove/Change Image
                                    </Button>
                                </>
                            )}

                            {!image && (
                                <FileUpload accept="image/.png,.jpg,.jpeg,.webp">
                                    <Input
                                        type="file"
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        opacity="0"
                                        cursor={"pointer"}
                                        aria-hidden="true"
                                        accept="image/.png,.jpg,.jpeg,.webp"
                                        id="image"
                                        name="image"
                                        size="md"
                                        onChange={(e) => {
                                            setData("image", e.target.files[0]);
                                            setImage(
                                                URL.createObjectURL(
                                                    e.target.files[0]
                                                )
                                            );
                                        }}
                                    />
                                </FileUpload>
                            )}
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel htmlFor="file">File Upload</FormLabel>

                            <InputGroup cursor={"pointer"}>
                                <InputLeftAddon children={<FiFile />} />
                                <Box position="relative">
                                    <Input
                                        size="md"
                                        isReadOnly
                                        placeholder={
                                            filename
                                                ? filename
                                                : "click to select file"
                                        }
                                    />
                                    <Input
                                        type="file"
                                        multiple={true}
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        cursor={"pointer"}
                                        top="0"
                                        left="0"
                                        opacity="0"
                                        aria-hidden="true"
                                        accept=".pdf,.doc,.docx,.ppt,.pptx"
                                        id="file"
                                        name="file"
                                        size="md"
                                        onChange={(e) => {
                                            setFilename(e.target.files[0].name);
                                            setData("file", e.target.files[0]);
                                        }}
                                    />
                                </Box>
                                {filename && (
                                    <InputRightAddon
                                        children={
                                            <IconButton
                                                icon={<CloseIcon />}
                                                color={"red.500"}
                                                onClick={() => {
                                                    setFilename(null);
                                                }}
                                            />
                                        }
                                    />
                                )}
                            </InputGroup>
                        </FormControl>
                        <PrimaryButton
                            type="submit"
                            isLoading={processing}
                            mt={4}
                            w="md"
                            maxW="full"
                        >
                            Save
                        </PrimaryButton>
                    </VStack>
                </GridItem>
            </Grid>
        </form>
    );
}
