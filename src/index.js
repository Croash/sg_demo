import React, { render, h, useState } from 'fre_sg'

const SubApp = () => {
  const [num, add] = useState(0)
  return <div><button onClick={() => { add(num+1) }} >{num}</button></div>
}

const App = () => <div>
  hello fre_sg
  <SubApp />
</div>

render(<App />, document.getElementById('app'))
