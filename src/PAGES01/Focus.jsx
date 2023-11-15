import React from 'react'

function Focus() {
    const FocusText = ()=> {
        console.log("You Focus This")
    }
    const BlurText = ()=> {
        console.log("You Blur This")
    }
  return (
    <> <br /> <br />
    <h1>Focus Event</h1>
    <input type="text" onFocus={FocusText} />
    <input type="text" onBlur={BlurText} />
    </>
  )
}

export default Focus;