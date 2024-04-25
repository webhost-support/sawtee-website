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
            "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
        autosave_ask_before_unload: true,
        autosave_interval: "30s",
        autosave_prefix: "{path}{query}-{id}-",
        autosave_restore_when_empty: false,
        autosave_retention: "2m",
        image_advtab: true,
        importcss_append: true,
        path_absolute: "/",
        relative_urls: false,
        image_title: true,
        automatic_uploads: true,
        // images_upload_url: "/admin/upload",
        // file_picker_types: "image",
        // file_picker_callback: function (cb, value, meta) {
        //     var input = document.createElement("input");
        //     input.setAttribute("type", "file");
        //     input.setAttribute("accept", "image/*");
        //     input.onchange = function () {
        //         var file = this.files[0];

        //         var reader = new FileReader();
        //         reader.readAsDataURL(file);
        //         reader.onload = function () {
        //             var id = "blobid" + new Date().getTime();
        //             var blobCache = tinymce.activeEditor.editorUpload.blobCache;
        //             var base64 = reader.result.split(",")[1];
        //             var blobInfo = blobCache.create(id, file, base64);
        //             blobCache.add(blobInfo);
        //             cb(blobInfo.blobUri(), { title: file.name });
        //         };
        //     };
        //     input.click();
        // },
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
        file_picker_callback: function (callback, value, meta) {
            var x =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.getElementsByTagName("body")[0].clientWidth;
            var y =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.getElementsByTagName("body")[0].clientHeight;

            var cmsURL = "/laravel-filemanager?editor=" + meta.fieldname;
            if (meta.filetype == "image") {
                cmsURL = cmsURL + "&type=Images";
            } else {
                cmsURL = cmsURL + "&type=Files";
            }

            tinyMCE.activeEditor.windowManager.openUrl({
                url: cmsURL,
                title: "Filemanager",
                width: x * 0.8,
                height: y * 0.8,
                resizable: "yes",
                close_previous: "no",
                onMessage: (api, message) => {
                    callback(message.content);
                },
            });
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
