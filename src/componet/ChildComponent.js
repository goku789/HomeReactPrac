import React from 'react'

export default function ChildComponent(prop) {
  return (
    <div>
      <button onClick={prop.greetHandler}>ClickMe</button>
    </div>
  )
}
