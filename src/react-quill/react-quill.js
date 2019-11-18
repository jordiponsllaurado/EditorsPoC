import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'


var toMarkdown = require('to-markdown');

class ReactQuillEditor extends React.Component {
  constructor(props) {
    super(props)
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.state = { text: 'This is a test bit of text' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  modules = {
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
  }

  componentDidMount() {
    this.attachQuillRefs()
    this.quillRef.setContents({
      "ops": [
        {"insert":{"mention":{"index":"1","denotationChar":"@","id":"2","value":"Patrik Sjölin"}}}
      ]
    })
    this.quillRef.insertText(1, "This is a test bit of text\n");
  }
  
  componentDidUpdate() {
    this.attachQuillRefs()
  }
  
  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    this.quillRef = this.reactQuillRef.getEditor();
  }
  
  handleChange(value) {
    this.setState({ text: value })
    console.log('normal', value)
    console.log('markdown', toMarkdown(value))
  }

  render() {
    return (
      <ReactQuill
        ref={(el) => { this.reactQuillRef = el }}
        theme="bubble"
        value={this.state.text}
        modules={this.modules}
        onChange={this.handleChange} />
    )
  }
}

export default ReactQuillEditor