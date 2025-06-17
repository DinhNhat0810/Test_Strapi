module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        toolbar: {
          items: [
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "blockQuote",
            "codeBlock",
            "insertTable",
            "mediaEmbed",
            "imageUpload",
            "|",
            "undo",
            "redo",
          ],
        },
        language: "en",
        image: {
          toolbar: [
            "imageTextAlternative",
            "imageStyle:full",
            "imageStyle:side",
          ],
        },
      },
    },
  },
  seo: {
    enabled: true,
  },
});
