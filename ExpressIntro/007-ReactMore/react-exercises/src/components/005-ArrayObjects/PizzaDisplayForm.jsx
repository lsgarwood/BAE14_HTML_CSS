import { useState } from "react";

const PizzaDisplayForm = ({pizzaArray}) => {

    return ( 
        <ol>
            {pizzaArray.map(pizzaData => <li>{pizzaData}</li>)}
        </ol>
     );
}
 
export default PizzaDisplayForm;