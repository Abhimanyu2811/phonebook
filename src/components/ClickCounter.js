import React,{useState} from 'react';
 const ClickCounter = () => {
    //var count=0;
    const[count,setCount]=useState(0);
    const incrementcount=()=>{
        //count++;
        //console.log(`count is now ${count}`)
        setCount(count+1)
};
    return (
    <div>
        <h2>ClickCounter examples</h2>
        <p>State is maintained by react and a setter is given to us</p>
        <h3>Value of count is {count}</h3>
        <button onClick={incrementcount} className='btn btn-info'>
            Click me
        </button>
    </div>
  );
};
export default ClickCounter;