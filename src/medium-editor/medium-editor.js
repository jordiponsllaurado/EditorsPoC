import React from 'react'
import MediumEditor from 'medium-editor'
import Tag from '@typeform/kitt/lib/components/tag'
import { colors } from '@typeform/kitt/lib/variables'

import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/beagle.css'

class MediumEditorComponent extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  componentDidMount() {
    var editor = new MediumEditor(".editable", {
      toolbar: {
        buttons: ['bold', 'italic', 'underline'],
        relativeContainer: document.getElementById('someRelativeDiv')
      },
    }); 
    editor.subscribe('editableInput', function (eventObj, editable) {
      // You can get the content of the editor at this point multiple ways
      var x = editable.innerHTML; // editable is the editor <div> element that was changed
      var y = editor.getContent(); // getContent() returns the content of the editor as well
      console.log('change', {x, y})
  });   
  }

  render() {
    return (
      <div>
        <span>Medium</span>
        <a href='https://yabwe.github.io/medium-editor/'>https://yabwe.github.io/medium-editor/</a>
        <div className='editable'>This is editable <Tag
          color={colors.danger}
          solid
          title='Piping'
          hasRemove={true}
          onIconClick={() => false}
          contenteditable="false"
        /></div>
        <div id="someRelativeDiv" ></div>
      </div>
    )
  }
}

export default MediumEditorComponent