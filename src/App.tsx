import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Descendant } from 'slate';
import Editor from './editor';

const initialContent: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'paragraph', // 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    // align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

function App() {
  // const [value, setValue] = useState(initialContent);
  const value = initialContent

  const onChange = (value: Descendant[]) => {
    // Save editor state to local storage
    localStorage["editorState"] = JSON.stringify(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A Fun Rich Text Editor.
        </p>
        <a
          className="App-link"
          href="https://github.com/in-fun/fun-editor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
      <div className='App-editor'>
        <Editor onChange={onChange} value={value}/>
      </div>
    </div>
  );
}

export default App;
