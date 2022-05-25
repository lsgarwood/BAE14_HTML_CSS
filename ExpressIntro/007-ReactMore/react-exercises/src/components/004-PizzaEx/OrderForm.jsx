import { useState } from "react";
import Pizza from "./Pizza";

const OrderForm = () => {

    const pizzaObj = {
        flavour : "Hawaiian",
        size : "Large",
        customerName : "Miss Cheese",
        stuffedCrust : true
    };

    const [pizzaData, setPizzaData] = useState({});

    const setData = (event) => {
        const {name, value} = event.target;

        setPizzaData((prevValue) => ({ 
           ...prevValue, 
                [name]: value,             
        }))
    };

    return ( 
        <>
            <input type="text" id='flavour' name="flavour" onChange={(event) => {setData(event)}}/>
            <input type="number" id='size' name="size" onChange={(event) => {setData(event)}}/>
            <input type="text" id='customerName' name="customerName" onChange={(event) => {setData(event)}}/>
            <input type="radio" name="stuffedCrust" value="Yes" onChange={(event) => {setData(event)}}/>
            <input type="radio" name="stuffedCrust" value="No" onChange={(event) => {setData(event)}}/>
            <Pizza data={pizzaData}/>
        </>
     );
}
 
export default OrderForm;