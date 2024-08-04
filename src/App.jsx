import { useState,useRef } from "react"

export default function App(){
  
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValue = () =>{
    alert(`
        Variavel: ${variable}
        Ref: ${ref.current}
        State: ${state}
      `)
  }
  
  return(
    <div>
      <h2>Conhecendo o useRef</h2>
      <hr />
      <p>Variavel: {variable}</p>
      <p>Ref:{ref.current}</p>
      <p>State:{state}</p>
      <button onClick={() => variable++}>Aumentar variavel</button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
      <hr />
      <button onClick={showValue}>Exibir valores</button>
    </div>
  )
}