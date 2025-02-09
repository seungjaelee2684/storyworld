import ReactQuill from "react-quill";
import { EditorContainer } from "./style";
import { editorModules, formats } from "../../../../modules/editorModules";
import 'react-quill/dist/quill.snow.css';

interface PostEditorProps {
  value?: any;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
};

const PostEditor = ({
  value,
  onChange,
  style,
  ...props
}: PostEditorProps) => {
  return (
    <EditorContainer style={style} {...props}>
      <ReactQuill
        theme='snow'
        modules={editorModules}
        formats={formats}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          height: '100%'
        }} />
    </EditorContainer>
  )
};

export default PostEditor;