const PizzaOrder = ({data}) => {

    const {flavour, size, customerName, stuffedCrust} = data;

    return ( 
        <div>
            <h5>Pizza Type: {flavour}</h5>
            <h5>Pizza Size: {size}</h5>
            <h5>Customer Name: {customerName}</h5>
            <h5>Stuffed Crust?: {stuffedCrust}</h5>
        </div>
    );
}

export default PizzaOrder;