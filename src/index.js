import React, { render, h, useState, useRef, useEffect } from 'fre_sg'
import Md from './components/md'

const App = () => {
  const mdR = useRef()
  useEffect(() => {
    console.log('effect')
  }, [])
  return <div>
    hello fre_sg
    <Md useRef={mdR} />
</div>}

render(<App />, document.getElementById('app'))
