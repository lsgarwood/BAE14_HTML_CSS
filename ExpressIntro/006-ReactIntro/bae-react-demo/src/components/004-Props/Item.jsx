const Item = ({name, image, cost}) => {
    return ( 
        <>
            <h4>Item name: {name}</h4>
            <img src={image} alt={name}/>
            <h5>Cost : {cost}</h5>
        </>
     );
}
 
export default Item;