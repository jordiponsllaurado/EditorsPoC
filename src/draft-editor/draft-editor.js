import React from 'react'
import {Editor, EditorState, ContentState} from 'draft-js';

class DraftEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createWithContent(ContentState.createFromText('A line of text in a paragraph.'))};
    this.onChange = (editorState) => this.setState({editorState});
  }
  
  render() {
    return (
      <div>
        <span>DraftEditor</span>
        <a href='https://draftjs.org/'>https://draftjs.org/</a>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    )
  }
}

export default DraftEditor