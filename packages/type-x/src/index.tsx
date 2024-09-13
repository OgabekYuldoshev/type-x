import "./styles/globals.scss";

import { TypexProvider } from "./hooks/useTypex";

import { forwardRef } from "react";
import { BaseKit } from "./extentions";
import EditorContent from "./components/editor-content";

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
          BaseKit.configure()
        ]}>
        <EditorContent />
      </TypexProvider>
    </div>
  );
})
