import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useColorMode } from "@chakra-ui/react";

export default function ContentEditor(props) {
    const { initialValue, ...rest } = props;
    const TINYMCE_API_KEY = import.meta.env.VITE_TINYMCE_API_KEY_GOOGLE
        ? import.meta.env.VITE_TINYMCE_API_KEY_GOOGLE
        : import.meta.env.VITE_TINYMCE_API_KEY_GITHUB;
    const editorRef = useRef(null);

    const { colorMode } = useColorMode();

    const [editorTheme, setEditorTheme] = React.useState(
        colorMode === "dark" ? "oxide-dark" : "oxide"
    );

    React.useEffect(() => {
        setEditorTheme(colorMode === "dark" ? "oxide-dark" : "oxide");
        console.log(colorMode);
    }, [colorMode]);

    return (
        <Editor
            ref={editorRef}
            apiKey={TINYMCE_API_KEY}
            initialValue={initialValue}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
                plugins:
                    "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion",
                editimage_cors_hosts: ["picsum.photos"],
                menubar: "file edit view insert format tools table help",
                toolbar:
                    "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
                autosave_ask_before_unload: true,
                autosave_interval: "30s",
                autosave_prefix: "{path}{query}-{id}-",
                autosave_restore_when_empty: false,
                autosave_retention: "2m",
                image_advtab: true,
                importcss_append: true,
                file_picker_callback: (callback, value, meta) => {
                    /* Provide file and text for the link dialog */
                    if (meta.filetype === "file") {
                        callback("/post/uploadmedia", {
                            text: "My text",
                        });
                    }

                    /* Provide image and alt text for the image dialog */
                    if (meta.filetype === "image") {
                        callback("/post/uploadmedia", {
                            alt: "My alt text",
                        });
                    }

                    /* Provide alternative source and posted for the media dialog */
                    if (meta.filetype === "media") {
                        callback("/post/uploadmedia", {
                            source2: "alt.ogg",
                            poster: "https://www.google.com/logos/google.jpg",
                        });
                    }
                },

                height: 600,
                image_caption: true,
                quickbars_selection_toolbar:
                    "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                noneditable_class: "mceNonEditable",
                toolbar_mode: "sliding",
                contextmenu: "link image table",
                skin: editorTheme,
                content_css: colorMode === "dark" ? "dark" : "default",
                content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
            }}
            {...rest}
        />
    );
}
