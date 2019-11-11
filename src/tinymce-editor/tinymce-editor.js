import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { Editor } from '@tinymce/tinymce-react';
import Tag from '@typeform/kitt/lib/components/tag'
import { colors } from '@typeform/kitt/lib/variables'

import './tinymce-editor.css'

class TinyMceEditor extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <div>
        <span>TinyMceEditor</span>
        <a href='https://www.tiny.cloud'>https://www.tiny.cloud</a>
        <Editor
         initialValue={"This is the initial content of the" + ReactDOMServer.renderToStaticMarkup(<Tag
          color={colors.danger}
          solid
          title='Piping'
          hasRemove={true}
          onIconClick={() => false}
          className='mceNonEditable'
        />)}
          // initialValue='This is the initial content of the editor.'
         init={{
          height: 500,
          menubar: false,
          plugins: [
          'link',
          'quickbars',
          'noneditable',
          'textpattern'
          ],
          mode : "textareas",
          noneditable_leave_contenteditable : true,
          toolbar: false,
          branding: false,
          inline: true,
          quickbars_selection_toolbar: 'bold italic quicklink',
          textpattern_patterns: [
            {start: '*', end: '*', format: 'italic'},
            {start: '**', end: '**', format: 'bold'},
         ]
         }}
         onChange={this.handleEditorChange}
       />
      </div>
    )
  }
}

export default TinyMceEditor