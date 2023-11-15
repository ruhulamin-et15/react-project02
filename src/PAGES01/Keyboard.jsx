import React from 'react'

function Keyboard() {
    const onKeyDownText= ()=> {
        console.log("Key Down")
    }
    const onKeyUpText= ()=> {
        console.log("Key Up")
    }
    const onKeyPressText= ()=> {
        console.log("Key Pressed")
    }
        

  return (
    <><br /> <br />
    <h1 className='bg-light p-2 shadow'>Keyboard Event:</h1> <br />
    <input type="text" className='bg-primary m-2' onKeyDown={onKeyDownText} />
    <input type="text" className='bg-danger m-2' onKeyUp={onKeyUpText} />
    <input type="text" className='bg-info' onKeyPress={onKeyPressText} />
    </>
  )
}

export default Keyboard