import React, {useEffect, useState} from 'react'

const UseEffectExample = () => {

    const [count, setCount] = useState(0);
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        console.log("useEffect")
    }, [count]);

  return (
    <div>
        {console.log("rendering")}
        <h3>Count: {count}</h3>
        <button onClick={() => {setCount(count => count + 1)}}>+</button>
        
        <button onClick={() => {setIsloading(!isloading)}}>isloading</button>
    </div>
  )
}

export default UseEffectExample