import "./styles/globals.scss";

import { TypexProvider } from "./hooks/useTypex";

import { forwardRef } from "react";
import StarterKit from '@tiptap/starter-kit'

import EditorContent from "./components/editor-content";
import Toolbar from "./components/toolbar";
import { PlaceholderExtension } from "./extentions";

export const TypexEditor = forwardRef<HTMLDivElement>(function Editor(_, ref) {
  return (
    <div ref={ref} className="x-flex x-flex-col x-border x-rounded">
      <TypexProvider
        editorProps={{
          attributes: {
            class: "focus:x-outline-none"
          }
        }}
        extensions={[
          StarterKit.configure({
            dropcursor: {
              color: "#DBEAFE",
              width: 4,
            },
          }),
          PlaceholderExtension
        ]}>
        <Toolbar />
        <EditorContent />
      </TypexProvider>
    </div>
  );
})
