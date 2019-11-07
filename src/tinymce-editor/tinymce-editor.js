import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { Editor } from '@tinymce/tinymce-react';
import Tag from '@typeform/kitt/lib/components/tag'

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
          color='red'
          hasRemove
          solid
          title='Piping'
        >
          Invalid piping
        </Tag>)}

         init={{
           height: 500,
           menubar: false,
           plugins: [
            'autolink',
            'codesample',
            'link',
            'lists',
            'powerpaste',
            'quickbars'
          ],
          formats: {
            customformat: { inline: 'span', styles: { color: '#00ff00', fontSize: '20px' }, attributes: { title: 'My custom format'} , classes: 'example1'}
          },
          style_formats: [
            { title: 'Badge', inline: 'span', styles: { display: 'inline-block', border: '1px solid #2276d2', 'border-radius': '5px', padding: '2px 5px', margin: '0 2px', color: '#2276d2' } },
          ],
           toolbar: false,
           branding: false,
           inline: true,
           quickbars_selection_toolbar: 'bold italic quicklink',
         }}
         onChange={this.handleEditorChange}
       />
      </div>
    )
  }
}

export default TinyMceEditor