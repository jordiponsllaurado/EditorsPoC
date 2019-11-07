import React from 'react'
import { TrixEditor } from "react-trix";

class Trix extends React.Component {
  handleEditorReady(editor) {
    // this is a reference back to the editor if you want to
    // do editing programatically
    editor.insertString("editor is ready");
  }
  handleChange(html, text) {
    // html is the new html content
    // text is the new text content
  }
  
  render() {
    let mergeTags = [{
      trigger: "@",
      tags: [
        {name: "Dominic St-Pierre", tag: "@dominic"},
        {name: "John Doe", tag: "@john"}
      ]
    }, {
      trigger: "{",
      tags: [
        {name: "First name", tag: "{{ .FirstName }}"},
        {name: "Last name", tag: "{{ .LastName }}"}
      ]
    }]

    return (
      <div>
        <span>Trix</span>
        <a href='https://trix-editor.org/'>https://trix-editor.org/</a>
        <TrixEditor
          autoFocus={true}
          placeholder="editor's placeholder"
          value="initial content <strong>for the editor</strong>"
          uploadURL="https://domain.com/imgupload/receiving/post"
          uploadData={{"key1": "value", "key2": "value"}}
          mergeTags={mergeTags}
          onChange={this.on_change_handler}
          onEditorReady={this.on_editor_ready_handler}
        />
      </div>
    )
  }
}

export default Trix