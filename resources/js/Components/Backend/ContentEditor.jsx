import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useColorMode } from "@chakra-ui/react";

export default function ContentEditor(props) {
    const { initialValue = "", ...rest } = props;
    const TINYMCE_API_KEY = import.meta.env.VITE_TINYMCE_API_KEY_GOOGLE
        ? import.meta.env.VITE_TINYMCE_API_KEY_GOOGLE
        : import.meta.env.VITE_TINYMCE_API_KEY_GITHUB;

    const editorRef = useRef(null);
    const { colorMode } = useColorMode();

    const [editorTheme, setEditorTheme] = React.useState(
        colorMode === "dark" ? "oxide-dark" : "oxide"
    );

    const editorConfig = {
        plugins:
            "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion",
        editimage_cors_hosts: ["picsum.photos"],
        menubar: "file edit view insert format tools table help",
        toolbar:
            "blocks | forecolor backcolor removeformat | bold italic underline strikethrough | link image blockquote codesample | align bullist numlist | code | undo redo | accordion accordionremove | fontfamily fontsize | table media | lineheight outdent indent| charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample",
        autosave_ask_before_unload: true,
        autosave_interval: "30s",
        autosave_prefix: "{path}{query}-{id}-",
        autosave_restore_when_empty: false,
        autosave_retention: "2m",
        image_advtab: true,
        importcss_append: true,
        image_title: true,
        automatic_uploads: true,
        image_class_list: [
            { title: "img-responsive", value: "img-responsive" },
        ],
        images_upload_url: "/admin/post/uploadmedia",
        images_upload_base_path: "/",
        image_file_types: "jpg,svg,webp,png",
        file_picker_types: "file image media",
        file_picker_callback: function (cb, value, meta) {
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = function () {
                var file = this.files[0];

                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    var id = "blobid" + new Date().getTime();
                    var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                    var base64 = reader.result.split(",")[1];
                    var blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);
                    cb(blobInfo.blobUri(), { title: file.name });
                };
            };
            input.click();
        },
        // file_picker_callback: (callback, value, meta) => {
        //     /* Provide file and text for the link dialog */
        //     if (meta.filetype === "file") {
        //         callback("/post/uploadmedia", {
        //             text: "My text",
        //         });
        //     }

        //     /* Provide image and alt text for the image dialog */
        //     if (meta.filetype === "image") {
        //         callback("/post/uploadmedia", {
        //             alt: "My alt text",
        //         });
        //     }

        //     /* Provide alternative source and posted for the media dialog */
        //     if (meta.filetype === "media") {
        //         callback("/post/uploadmedia", {
        //             source2: "alt.ogg",
        //             poster: "https://www.google.com/logos/google.jpg",
        //         });
        //     }
        // },

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
    };

    React.useEffect(() => {
        setEditorTheme(colorMode === "dark" ? "oxide-dark" : "oxide");
    }, [colorMode]);

    return (
        <Editor
            ref={editorRef}
            apiKey={TINYMCE_API_KEY}
            initialValue={initialValue}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{ ...editorConfig }}
            {...rest}
        />
    );
}
