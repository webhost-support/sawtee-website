import { Box, Button, Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";
import InertiaChakraLink from "@/Components/Frontend/styles/inertia-chakra-link";

const NewsletterPost = ({ post }) => {
    const viewerConfig = {
        embedMode: "IN_LINE",
        defaultViewMode: "CONTINUOUS",
        showDownloadPDF: true,
        showPrintPDF: true,
    };

    const ENV = import.meta.env.VITE_APP_ENV;

    const Adobe_PDF_API =
        ENV === "developement"
            ? import.meta.env.VITE_DEV_ENV_ADOBE_PDF_EMBED_API
            : import.meta.env.VITE_PROD_ENV_ADOBE_PDF_EMBED_API_2;

    const pdf = post.media.filter((m) => m.collection_name === "post-files")[0];
    console.log(Adobe_PDF_API);
    useEffect(() => {
        document.addEventListener("adobe_dc_view_sdk.ready", function () {
            /* Initialize the AdobeDC View object */
            // const adobeDCView = new AdobeDC.View({
            const adobeDCView = new AdobeDC.View({
                clientId: Adobe_PDF_API,
                // "a216d6a763e14deda203664862f3dead" ||
                // "a0b938dc0dda4ceba3ce648ec3caeb6a",
                divId: "adobe-dc-view",
            });
            adobeDCView.previewFile(
                {
                    content: {
                        location: {
                            url: pdf.original_url,
                        },
                    },
                    metaData: {
                        fileName: post.title,
                    },
                },
                viewerConfig
            );
        });
    }, []);
    return (
        <Box pt="40px">
            <Head>
                <script
                    src="https://acrobatservices.adobe.com/view-sdk/viewer.js"
                    defer
                />
            </Head>

            {post.content ? (
                <Container centerContent maxW="7xl">
                    <Box
                        className="newsletter-html"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <InertiaChakraLink href={pdf.original_url}>
                        <Button colorScheme="primary">View PDF</Button>
                    </InertiaChakraLink>
                </Container>
            ) : (
                <Box
                    id="adobe-dc-view"
                    className="full-window-div"
                    style={{ width: "100%", margin: "0 auto" }}
                ></Box>
            )}
        </Box>
    );
};

export default NewsletterPost;
