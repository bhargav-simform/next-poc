import { Editor as WysiwygEditor } from 'react-draft-wysiwyg'
import { ContentState, EditorState } from 'draft-js'
import { CharacterCounter, EditorStyle } from './index.style'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import 'draft-js/dist/Draft.css'

const COMMENT_EDITOR_CHARACTER_LIMIT = 300
interface EditorProps {
  editorState: EditorState
  handleEditorStateChange: (editorState: EditorState) => void
  readOnly?: boolean
  placeholder?: string
}

function Editor({
  editorState,
  handleEditorStateChange,
  readOnly = false,
  placeholder = 'Write something...'
}: EditorProps) {

  const getTextLength = () =>
    editorState.getCurrentContent().getPlainText('').length

  const handlePastedText = (text: string) => {
    const newContentState = ContentState.createFromText(text)
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      'insert-characters'
    )
    handleEditorStateChange(newEditorState)
    return true
  }

  return (
    <EditorStyle className="text-editor">
      <WysiwygEditor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        spellCheck
        toolbarClassName="toolbar-class"
        placeholder={placeholder}
        handlePastedText={handlePastedText}
        readOnly={readOnly}
        toolbar={{
          options: [
            'image',
            'inline',
            'colorPicker',
            'fontSize',
            'fontFamily',
            'blockType',
            'list',
            'textAlign',
            'emoji',
            'link',
            'history'
          ]
        }}
      />
      <CharacterCounter
        textLength={getTextLength()}
        COMMENT_EDITOR_CHARACTER_LIMIT={COMMENT_EDITOR_CHARACTER_LIMIT}
      >
        {getTextLength()}/{COMMENT_EDITOR_CHARACTER_LIMIT} characters
      </CharacterCounter>
    </EditorStyle>
  )
}

export default Editor
