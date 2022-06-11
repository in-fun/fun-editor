import React from 'react';
import { DocumentEditor } from './DocumentEditor';
import logo from './logo.svg';
import './App.css';
import { DocumentFeatures } from './views';
import { Descendant } from 'slate';

const defaultDocumentFeatures: DocumentFeatures = {
  formatting: {
    alignment: { center: true, end: true },
    blockTypes: { blockquote: true, code: true },
    headingLevels: [1, 2, 3, 4, 5, 6],
    inlineMarks: {
      bold: true,
      code: true,
      italic: true,
      keyboard: true,
      strikethrough: true,
      subscript: true,
      superscript: true,
      underline: true,
    },
    listTypes: { ordered: true, unordered: true },
    softBreaks: true,
  },
  dividers: true,
  links: true,
  layouts: [[1], [1, 1], [1, 2], [2, 1]],
};

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
        <DocumentEditor documentFeatures={defaultDocumentFeatures}
          componentBlocks={{}}
          relationships={{}} onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default App;
