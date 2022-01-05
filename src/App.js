import React, { useState, useRef } from 'react'
import Typewriter from 'typewriter-effect';
import './App.css'

const App = () => {

  const [name, setName] = useState('')
  const inputRef = useRef()
  const backRef = useRef()

  const focus = () => {

    backRef.current.style.color = 'blue'
    // inputRef.current.focus()
    // inputRef.current.value = 'kunkjvnskdjvn'
  }

  return (
    <div>
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <button
        onClick={focus}
      >click</button>
      <p ref={backRef} id='backref'>Lorem ipsum dolor sit.</p>
      <p>Lorem ipsum dolor sit.</p>
      <p>123123123</p>
      <h3>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Nimaga aynan Hello World! ilwekm lkemf wlekmf fyugjhuguj.ig,uyjghjkghjwlkemf lwkm lwkem lwkem lwkm dcgyhfgvhvh g f gh vbhfg bu yerda sizning reklamangiz bolishi mumkin edi')
              // .callFunction(() => {
              //   console.log('String typed out!');
              // })
              .pauseFor(2500)
              .deleteAll()
              // .loop()
              // .callFunction(() => {
              //   console.log('All strings were deleted');
              // })
              .start()
          }}
        />
      </h3>
    </div>
  )
}

export default App
