import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './editor'
import SlateEditor from './slate-editor'
import DraftEditor from './draft-editor'
import Trix from './trix'
import QuillEditor from './quill-editor'
import MediumEditor from './medium-editor'
import TinyMceEditor from './tinymce-editor/tinymce-editor';

function App() {
  return (
    <div className="App App-header">
      <SlateEditor />
      <hr />
      <DraftEditor />
      <hr />
      {/* <Editor />
      <br /> */}
      <QuillEditor />
      <hr />
      <Trix />
      <hr />
      <MediumEditor />
      <hr />
      <TinyMceEditor />
    </div>
  );
}

export default App;
