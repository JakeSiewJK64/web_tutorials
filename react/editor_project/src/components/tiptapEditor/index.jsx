import { EditorContent, useEditor } from "@tiptap/react";
import { EditorMenubar } from "./editorMenubar";
import StarterKit from "@tiptap/starter-kit";
import "./editor.css";

// define your extension array
const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

const TipTapEditor = () => {
  const editor = useEditor({
    extensions,
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      console.log(html);
    },
  });

  return (
    <>
      <EditorMenubar editor={editor} />
      <EditorContent
        style={{
          marginTop: "10px",
          padding: "10px",
          border: "solid 1px lightgray",
        }}
        editor={editor}
      />
    </>
  );
};

export default TipTapEditor;
