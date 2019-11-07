import React from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
})

class SlateEditor extends React.Component {
  state = {
    value: initialValue,
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }
  
  render() {
    return (
      <div>
        <span>SlateEditor</span>
        <a href='https://www.slatejs.org/#/rich-text'>https://www.slatejs.org/</a>
        <Editor value={this.state.value} onChange={this.onChange} />
      </div>
    )
  }
}

export default SlateEditor