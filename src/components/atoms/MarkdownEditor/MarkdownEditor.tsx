'use client';
import '@uiw/react-markdown-preview/markdown.css';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import rehypeSanitize from 'rehype-sanitize';

interface MarkdownEditorProps {
  value?: string;
  onValueChange: (value: string | undefined) => void;
}

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onValueChange }) => {
  return (
    <div data-color-mode='dark'>
      <MDEditor
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        preview='edit'
        value={value}
        onChange={onValueChange}
      />
    </div>
  );
};
