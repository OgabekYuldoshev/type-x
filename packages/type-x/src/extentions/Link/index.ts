import { getMarkRange } from "@tiptap/core";
import Link from "@tiptap/extension-link";
export { default as LinkComponent } from "./link-component";
import { Plugin, TextSelection } from "@tiptap/pm/state";
import type { EditorView } from "@tiptap/pm/view";

export const LinkExtension = Link.extend({
  inclusive: false,

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handleClick: (view: EditorView, pos: number) => {
            const { schema, doc, tr } = view.state;
            const range = getMarkRange(doc.resolve(pos), schema.marks.link);
            if (!range) {
              return false;
            }
            const $start = doc.resolve(range.from);
            const $end = doc.resolve(range.to);
            const transaction = tr.setSelection(new TextSelection($start, $end));
            view.dispatch(transaction);
          },
        },
      }),
    ];
  },
}).configure({
  openOnClick: true,
});
