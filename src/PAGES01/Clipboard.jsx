import React from 'react'

function Clipboard() {
    const CopyText = ()=>{
        console.log("Text Copied")
    }
    const CutText = ()=>{
        console.log("Text Cut Successful")
    }
    const OnPaste= ()=>{
        console.log("Text Paste")
    }
  return (
    <>
    <p onCopy={CopyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsa.</p>
    <h1 onCut={CutText}>Ruhul Amin</h1>
    <input type="text" onPaste={OnPaste} placeholder="On Text Paste"/>
    </>
  )
}

export default Clipboard