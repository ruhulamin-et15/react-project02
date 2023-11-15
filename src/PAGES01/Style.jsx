import React from 'react'
import RuhulStyle from "./Ruhul.module.css";

function Style() {
    const ElementOne = {
        color:"black",
        backgroundColor:"green",
        textAlign:"center"
    }
  return (
    <> <br />
    <h1 style={ElementOne}>my 1st style component</h1> <br />
    <h1 className={RuhulStyle.Error}>Ruhul Amin</h1> 
    </>
  )
}

export default Style