import React from 'react';
import './App.css';
import SlateEditor from './slate-editor'
import MediumEditor from './medium-editor'
import TinyMceEditor from './tinymce-editor/tinymce-editor';
import CKEEditor from './cke-editor/cke-editor';

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
    </div>
  );
}

export default App;
