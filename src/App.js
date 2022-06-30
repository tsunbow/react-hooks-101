import React, { useState, useEffect } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log('This us like componentDidMount or componentDidUpdate.')
  })
  useEffect(() => {
    console.log('This us like componentDidMount or componentDidUpdate.')
  },[])

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={()=>setState({...state, price: price + 1})}>+1</button>
      <button onClick={()=>setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={(event)=>setState({...state, name: event.target.value})} />
    </>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App
