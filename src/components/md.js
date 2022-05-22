import React, { h, useState, useRef, useLayout, useEffect } from 'fre_sg'
import {renderMarkdown} from './renderMD'

const Md = () => {
  const mdRef = useRef()
  const content = '1234'
  useEffect(() => {
    renderMarkdown(mdRef, content)

  })
  const [num, add] = useState(0)
  useLayout(() => {
  })

  return <div>
    <button onClick={() => {add(num+1)}}>{num}</button>
    <div ref={mdRef}>fsg</div>
  </div>
}

export default Md
