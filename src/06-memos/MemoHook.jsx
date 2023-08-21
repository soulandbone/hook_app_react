import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';


const heavyStuff = (iterationNumber = 100) => {
  for(let i = 0; i< iterationNumber ; i++){
    console.log('Ahi vamos...');
  }

  return `${iterationNumber} number of done iterations`;

}



export const MemoHook = () => {

const {counter, increment} = useCounter(4000);
const [show, setshow] = useState(true);

const memorizedValue = useMemo( () =>  heavyStuff(counter), [counter] );

  return (

    <>
    <h1>Counter: <small>{counter}</small> </h1>
    <hr />

    <h4>{memorizedValue}</h4>
    
    <button className="btn btn-primary"
    onClick={()=> increment()}>

        +1
    </button
    
    >

    <button className="btn btn-outline-primary"
            onClick={() => setshow(!show)}
            >
            Show/Hide {JSON.stringify(show)}

    </button>

     
    </>
  
  )
}
