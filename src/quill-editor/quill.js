import React from 'react'

import Quill from 'quill';
import 'quill-mention'

import 'quill/dist/quill.bubble.css'
import './quill.css'

var toMarkdown = require('to-markdown');

class QuillEditor extends React.Component {
  componentDidMount() {
    var quill = new Quill('#editor', {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'link'],
        ],
        mention: {
          allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
          mentionDenotationChars: ["@"],
          source: function (searchTerm, renderList, mentionChar) {
            let values= [
                { id: 1, value: 'Fredrik Sundqvist' },
                { id: 2, value: 'Patrik Sjölin' }
              ];
    
            if (searchTerm.length === 0) {
              renderList(values, searchTerm);
            } else {
              const matches = [];
              for (let i = 0; i < values.length; i++)
                if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) matches.push(values[i]);
              renderList(matches, searchTerm);
            }
          },
        },
      },
      placeholder: 'Compose an epic...',
      theme: 'bubble'
    })
    quill.setContents({
      "ops": [
        {"insert":{"mention":{"index":"1","denotationChar":"@","id":"2","value":"Patrik Sjölin"}}}
      ]
    })
    quill.insertText(1, "This is a test bit of text\n");
    quill.on('editor-change', function(delta, oldDelta, source) {
      console.log('normal', JSON.stringify(quill.getContents()))
      console.log('markdown', toMarkdown(quill.root.innerHTML))
    })
  }

  render() {
    return (
      <div>
        <span>Quill</span>
        <a href=' https://quilljs.com/'> https://quilljs.com/</a>
        <div id="QuillEditor-container">
            {/* <!-- Create the editor container --> */}
            <div id="editor">
            </div>
          </div>
      </div>
    )
  }
}

export default QuillEditor