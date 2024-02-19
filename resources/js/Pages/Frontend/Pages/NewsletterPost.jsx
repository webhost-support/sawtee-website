import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Section from "@/Components/Frontend/styles/section";
import { Head } from "@inertiajs/react";

const NewsletterPost = ({ post }) => {
    const pdf = post.media.filter((m) => m.collection_name === "post-files")[0];
    console.log(post, pdf);
    return (
        <div pt="0px">
            <Head>
                <script
                    src="https://documentcloud.adobe.com/view-sdk/main.js"
                    defer
                />
            </Head>
            <PDFEMBED url={pdf ? pdf.original_url : null} title={post.title} />
        </div>
    );
};

export default NewsletterPost;

const PDFEMBED = ({ url, title }) => {
    const viewerConfig = {
        embedMode: "IN_LINE",
        defaultViewMode: "CONTINUOUS",
        showDownloadPDF: true,
        showPrintPDF: true,
    };

    useEffect(() => {
        document.addEventListener("adobe_dc_view_sdk.ready", function () {
            /* Initialize the AdobeDC View object */
            // const adobeDCView = new AdobeDC.View({
            const adobeDCView = new AdobeDC.View({
                // clientId: "a0b938dc0dda4ceba3ce648ec3caeb6a",
                clientId: "a216d6a763e14deda203664862f3dead",
                divId: "adobe-dc-view",
            });
            adobeDCView.previewFile(
                {
                    content: {
                        location: {
                            url: url,
                        },
                    },
                    metaData: {
                        fileName: title,
                    },
                },
                viewerConfig
            );
        });
    }, []);

    return (
        <Box
            id="adobe-dc-view"
            className="full-window-div"
            style={{ width: "100%", height: "100vh", margin: "0 auto" }}
        ></Box>
    );
};
