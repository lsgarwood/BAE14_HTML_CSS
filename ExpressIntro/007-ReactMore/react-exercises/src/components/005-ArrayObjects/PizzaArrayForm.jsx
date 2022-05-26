import { useState } from "react";
import PizzaOrder from "./PizzaOrder.jsx";

const PizzaArrayForm = () => {

    const pizzaObj = {
        flavour : "Hawaiian",
        size : "Large",
        customerName : "Miss Cheese",
        stuffedCrust : true
    };

    const [pizzaData, setPizzaData] = useState({});
    const [pizzaArray, setPizzaArray] = useState([]);
    
    const setData = (event) => {
        const {name, value} = event.target;

        setPizzaData((prevValue) => ({ 
           ...prevValue, 
                [name]: value,             
        }))
    };

    const addToArray = () => {

        setPizzaArray((prevArray) => {
            return[...prevArray, pizzaData]
        });
        
        console.log("Your order was added to the array!");

        setPizzaData({});
    }

    return ( 
        <div>
            <label name="flavour">Flavour</label>
            <input type="text" name="flavour" onChange={(event) => {setData(event)}}/>
            <label name="size">Size</label>
            <input type="number" name="size" onChange={(event) => {setData(event)}}/>
            <label name="customerName">Customer Name</label>
            <input type="text" id='customerName' name="customerName" onChange={(event) => {setData(event)}}/>
            <label name="stuffedCrust">Stuffed Crust?</label>
            <input type="radio" name="stuffedCrust" value="Yes" onChange={(event) => {setData(event)}}/>Yes
            <input type="radio" name="stuffedCrust" value="No" onChange={(event) => {setData(event)}}/>No
            <button type="button" onClick={addToArray}> Click to Order! </button>
            <button type="button" onClick={<PizzaOrder/>}> Print Orders! </button>
            
        </div>
     );
}
 
export default PizzaArrayForm;