import "./styles/globals.scss";

import { TypexProvider } from "./hooks/useTypex";

import { forwardRef } from "react";

import EditorContent from "./components/editor-content";
import Toolbar from "./components/toolbar";
import { defaultExtentions } from "./extentions";
import BubbleMenu from "./components/bubble-menu";

export const TypexEditor = forwardRef<HTMLDivElement>(function Editor(_, ref) {
  return (
    <div ref={ref} className="x-flex x-flex-col x-border x-rounded">
      <TypexProvider
        locale="en"
        editorProps={{
          attributes: {
            class: "focus:x-outline-none",
          },
        }}
        extensions={[...defaultExtentions]}
      >
        <Toolbar />
        <EditorContent />
        <BubbleMenu />
      </TypexProvider>
    </div>
  );
});
