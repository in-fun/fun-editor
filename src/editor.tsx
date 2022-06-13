// PS. Tailwind classes used for wrapper.

import { FC, useEffect, useState } from 'react'
import { FieldContainer } from '@keystone-ui/fields'
import { Field } from '@keystone-6/fields-document/views'
import React from 'react'

enum EditorState {
  Loading,
  Ready,
}

const Loading = () => (
  <div className="flex justify-center items-center">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

const field: any = {
  componentBlocks: [],
  relationships: {},
  documentFeatures: {
    formatting: {
      inlineMarks: {
        bold: true,
        italic: true,
        underline: true,
        strikethrough: true,
        code: true,
        keyboard: false,
        subscript: false,
        superscript: false,
      },
      alignment: {
        center: false,
        end: false,
      },
      blockTypes: {
        blockquote: true,
        code: false,
      },
      headingLevels: [1, 2, 3, 4, 5],
      listTypes: { ordered: true, unordered: true },
      softBreaks: true,
    },
    layouts: [[1], [1, 1], [1, 2], [2, 1]],
    dividers: true,
    links: true,
  },
}

interface Props {
  onChange: (data: any[]) => void
  value: any[]
}

const Editor: FC<Props> = ({ onChange, value }) => {
  const [reload, setReload] = useState<EditorState>(EditorState.Loading)
  const [description, setDescription] = useState<any[]>(value)

  useEffect(() => {
    setReload(EditorState.Ready)
  }, [])

  useEffect(() => {
    console.log(description)
    if (onChange) onChange(description)
  }, [description])

  return (
    <div className="h-96 border-x border-gray-300 px-5">
      {reload === EditorState.Loading ? (
        <Loading />
      ) : (
        <FieldContainer>
          <Field
            value={description}
            autoFocus={false}
            field={field}
            onChange={(document) => {
              setDescription(document)
            }}
          />
        </FieldContainer>
      )}
    </div>
  )
}

export default Editor
