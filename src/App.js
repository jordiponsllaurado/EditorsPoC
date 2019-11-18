import React from 'react';
import './App.css';
import SlateEditor from './slate-editor'
import MediumEditor from './medium-editor'
import TinyMceEditor from './tinymce-editor/tinymce-editor';
import CKEEditor from './cke-editor/cke-editor';
import QuillEditor from './quill-editor';
import ReactQuill from './react-quill';

function App() {
  return (
    <div className="App App-header">
      <SlateEditor />
      <hr />
      <MediumEditor />
      <hr />
      <TinyMceEditor />
      <hr />
      <CKEEditor />
      <hr />
      <QuillEditor />
      <hr />
      <ReactQuill />
    </div>
  );
}

export default App;
