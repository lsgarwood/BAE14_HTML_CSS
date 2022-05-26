const PizzaOrder = ({flavour, size, customerName, stuffedCrust}) => {

    const pizzaListItems = () => {
    
        const pizzas = [flavour, size, customerName, stuffedCrust];

    return (
        <ol>
            {pizzas.map(pizza => (<li key={pizza}></li>))};
        </ol>
    );
    }

    // return ( 
    //     <div>
    //         <h5>Pizza Type: {flavour}</h5>
    //         <h5>Pizza Size: {size}</h5>
    //         <h5>Customer Name: {customerName}</h5>
    //         <h5>Stuffed Crust?: {stuffedCrust}</h5>
    //     </div>
    // );
}
 
export default PizzaOrder;