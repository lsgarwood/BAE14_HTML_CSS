const Pet = ({name, phoneNum,  address, image, isCute}) => {
    return ( 
        <>
            <h5>Name: {name}</h5>
            <h5>Phone Number: {phoneNum}</h5>
            <h5>Address: {address}</h5>
            <img src={image} alt={name}/>
            <h5>{isCute ? "cute" : "viscious"}</h5>
        </>
     );
}
 
export default Pet;