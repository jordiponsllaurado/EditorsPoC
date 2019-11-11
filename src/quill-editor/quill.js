import React from 'react'
import Tag from '@typeform/kitt/lib/components/tag'
import { colors } from '@typeform/kitt/lib/variables'

import Quill from 'quill';

import 'quill/dist/quill.bubble.css'
import './quill.css'
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
        ]
      },
      scrollingContainer: '#scrolling-container', 
      placeholder: 'Compose an epic...',
      theme: 'bubble'  // or 'bubble'
    });
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
              <Tag
                color={colors.danger}
                solid
                title='Piping'
                hasRemove={true}
                onIconClick={() => false}
              />
            </div>
          </div>
      </div>
    )
  }
}

export default QuillEditor