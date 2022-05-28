import { useEffect, useState } from "react";

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setTimeout(() => setTime(new Date().toLocaleTimeString()),1000)
    },[time])

    return ( 
        <h2>Time is: {time}</h2>
     );
}
 
export default Clock;