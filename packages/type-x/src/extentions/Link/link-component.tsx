import ActionPopover from "@/components/action-popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTypexContext } from "@/hooks/useTypex";
import { isUrlValid } from "@/lib/utils";
import type { Editor } from "@tiptap/core";
import { Check, Trash } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

const LinkComponent = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();
  const [isOpen, setOpen] = useState(false);

  return (
    <ActionPopover
      open={isOpen}
      onOpenChange={setOpen}
      onActive={() => editor.isActive("link")}
      title={t("x.link")}
      icon="Link"
    >
      <Form
        t={t}
        editor={editor}
        onSubmit={() => {
          setOpen(false);
        }}
      />
    </ActionPopover>
  );
};

function Form({
  t,
  editor,
  onSubmit,
}: {
  editor: Editor;
  onSubmit(): void;
  t(k: string): string;
}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const link = editor.getAttributes("link");
    if (link) {
      setInput(link.href);
    }
  }, [editor]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isUrlValid(input)) {
      editor.chain().setLink({ href: input }).run();
      setInput("");
      onSubmit();
    }
    return;
  }

  return (
    <form onSubmit={handleSubmit} className="x-grid x-gap-2">
      <div>
        <label htmlFor="x-url" className="x-text-sm">
          {t("x.link.insert")}
          <span className="x-text-destructive">*</span>
        </label>
        <Input
          autoFocus
          id="x-url"
          type="url"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("x.link.placeholder")}
        />
      </div>
      <div className="x-grid x-grid-cols-2 x-gap-2">
        <Button type="button">
          <Trash size={18} />
        </Button>
        <Button variant={"outline"} type="submit">
          <Check size={18} />
        </Button>
      </div>
    </form>
  );
}

export default LinkComponent;
