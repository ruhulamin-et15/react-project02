import React from 'react'

function Expression() {
    const Obj = {
        name:"Ruhul Amin",
        prof:"Programing"
    }
  return (
    <div>
        <h1>{`My Name Is ${Obj.name}, & My Profession is ${Obj.prof}`}</h1>
    </div>
  )
}

export default Expression