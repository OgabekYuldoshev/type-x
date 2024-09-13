import Placeholder from "@tiptap/extension-placeholder";

export const PlaceholderExtension = Placeholder.configure({
    placeholder: ({ node }) => {
        if (node.type.name === "heading") {
            return `Heading ${node.attrs.level}`;
        }
        return "Press '/' for commands";
    },
    includeChildren: true,
});
