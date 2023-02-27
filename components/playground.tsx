'use client'
import { createElement, useState } from 'react'

// Default to a simple h1
const INITIAL_CODE = `<h1 class="text-gray-500">Hello world</h1>`

export function Playground() {
  const [text, setText] = useState(INITIAL_CODE)

  // Take the JSX text and pass it to createElement
  // to create a React element
  const element = createElement('div', {
    dangerouslySetInnerHTML: { __html: text },
  })

  return (
    // Use flex to split into two equal columns
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-xl text-red-500">Playground</h1>
        <textarea
          className="border border-gray-300 rounded p-2 w-full font-mono"
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex-1">{element}</div>
    </div>
  )
}
