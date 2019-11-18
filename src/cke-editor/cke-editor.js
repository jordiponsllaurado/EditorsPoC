import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
// import Mention from '@ckeditor/ckeditor5-mention/src/mention';

const editorConfiguration = {
  toolbar: [ 'bold', 'italic', 'link' ],
  // plugins: [ Mention],
  // mention: {
  //   feeds: [
  //       {
  //           marker: '@',
  //           feed: [ '@Barney', '@Lily', '@Marshall', '@Robin', '@Ted' ],
  //           minimumCharacters: 1
  //       }
  //   ]
  // }
};

class CKEEditor extends React.Component {
  render() {
    return (
      <div>
        <span>CKEEditor</span>
        <a href='https://ckeditor.com/docs/ckeditor5/latest/builds/'>https://ckeditor.com/ckeditor-5//</a>
        <CKEditor
          editor={ BalloonEditor }
          config={ editorConfiguration }
          data="Hello from CKEditor 5!"
          onInit={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              console.log( { event, editor, data } );
          } }
      />
      </div>
    )
  }
}

export default CKEEditor