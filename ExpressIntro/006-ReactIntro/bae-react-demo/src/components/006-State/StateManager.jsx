import {useState} from 'react';
import Counter from './Counter';
import Display from './Display';

const StateManager = () => {

    const [number, setNumber] = useState(0);

    return ( 
        <>
            <Counter changeValue={setNumber}/>
            <Display number={number}/>
        </>
     );
}
 
export default StateManager;