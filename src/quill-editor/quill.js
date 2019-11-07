import React from 'react'
import Tag from '@typeform/kitt/lib/components/tag'

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

// Give our new Footer format a name to use in the toolbar.
Footer.blotName = 'footer';

// Give it a class name to edit the css.
Footer.className = 'ql-footer';

// Give it a tagName of iframe to tell quill what kind of element to create.
Footer.tagName = 'div';

// Register the new Footer format so we can use it in our editor.
Quill.register(Footer, true);

// Create the footer handler.
var footerHandler = function() {
  // Get the cursor location to know where footer will be added.
  var index = this.quill.getSelection(true).index;
  var footerHTML = '<h1>Footer</h1>'
  + '<p>This is our new footer</p>';

  // // Insert the footer with the footerHTML.
  this.quill.insertEmbed(index, 'footer', footerHTML);
};

// Import the Toolbar module so we can add a custom handler to our footer button.
var Toolbar = Quill.import('modules/toolbar');

// Add our custom footer handler to the footer button.
Toolbar.DEFAULTS.handlers['footer'] = footerHandler;

class QuillEditor extends React.Component {
  componentDidMount() {
    var quill = new Quill('#editor', {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'link'],
          ['image', 'footer']
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
              <p>Some initial <strong>bold</strong> text</p>
            </div>
          </div>
      </div>
    )
  }
}

export default QuillEditor