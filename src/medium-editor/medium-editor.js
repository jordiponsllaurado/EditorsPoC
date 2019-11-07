import React from 'react'
import MediumEditor from 'medium-editor'

import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/beagle.css'

class MediumEditorComponent extends React.Component {

  componentDidMount() {
    var editor = new MediumEditor(".editable", {
      toolbar: {
        buttons: ['bold', 'italic', 'underline'],
        relativeContainer: document.getElementById('someRelativeDiv')
      },
    });    
  }

  render() {
    return (
      <div>
        <span>Medium</span>
        <a href='https://yabwe.github.io/medium-editor/'>https://yabwe.github.io/medium-editor/</a>
        <div className='editable'>This is editable</div>
        <div id="someRelativeDiv"></div>
      </div>
    )
  }
}

export default MediumEditorComponent