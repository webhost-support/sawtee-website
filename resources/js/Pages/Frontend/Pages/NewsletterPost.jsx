import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";

const NewsletterPost = ({ post }) => {
    const viewerConfig = {
        embedMode: "IN_LINE",
        defaultViewMode: "CONTINUOUS",
        showDownloadPDF: true,
        showPrintPDF: true,
    };
    const pdf = post.media.filter((m) => m.collection_name === "post-files")[0];
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
        <div pt="0px">
            <Head>
                <script
                    src="https://acrobatservices.adobe.com/view-sdk/viewer.js"
                    defer
                />
            </Head>
            <Box
                id="adobe-dc-view"
                className="full-window-div"
                style={{ width: "100%", margin: "0 auto" }}
            ></Box>
            {/* <iframe
                src={pdf ? pdf.original_url : null}
                width="100%"
                height="800px"
                title={post.title}
            ></iframe> */}
        </div>
    );
};

export default NewsletterPost;


