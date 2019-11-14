import React from 'react'
import Tag from '@typeform/kitt/lib/components/tag'
import { colors } from '@typeform/kitt/lib/variables'

import Quill from 'quill';
import 'quill-mention'

import 'quill/dist/quill.bubble.css'
import './quill.css'

var toMarkdown = require('to-markdown');

const BlockEmbed = Quill.import('blots/block/embed');

// Create a new format based off the BlockEmbed.
class Footer extends BlockEmbed {

  // The value will be the HTML that is embedded.
  // This time the value is passed from our custom handler.
  static create(value) {
      // Create the node using the BlockEmbed's create method.
      var node = super.create();
      node.insertAdjacentHTML('beforeend', value);    
      return node;
  }
}

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
      scrollingContainer: '#scrolling-container', 
      placeholder: 'Compose an epic...',
      theme: 'bubble'  // or 'bubble'
    })
    ;
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
              <p>Some initial text</p>
              <div className='ql-custom'></div>
            </div>
          </div>
      </div>
    )
  }
}

export default QuillEditor