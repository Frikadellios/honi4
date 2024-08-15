const config = {
    backend: {
        // Use netlify identity as backend
        name: "github",
        branch: "master",
        repo: "Frikadellios/honi4"
    },

    media_folder: "@/assets",
    public_folder: "@/assets",

    // Please run "npx @staticcms/proxy-server" for local backend
    local_backend: true,

    // publish_mode: editorial_workflow
    collections: [
        {
            label: "Blog",
            name: "blog",
            folder: "@/content/blog",
            create: true,
            editor: {
                preview: true
            },
            fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Description", name: "description", widget: "string" },
                { label: "Author", name: "author", widget: "string" },
                { label: "Publish Date", name: "date", widget: "datetime" },
                { label: "Body", name: "body", widget: "markdown" },
            ]
        }
    ]
};

export default config;
