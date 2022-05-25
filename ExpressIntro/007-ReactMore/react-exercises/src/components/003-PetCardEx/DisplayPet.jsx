const DisplayPet = ({name, phoneNum,  address, image, isCute, color}) => {
    return ( 
        <>
            <h5>Name: {name}</h5>
            <h5>Phone Number: {phoneNum}</h5>
            <h5>Address: {address}</h5>
            <img src={image} alt={name}/>
            <h5>Am I cute or what?!: {isCute}</h5>
            <h5>What colour am I?:{color}</h5>
        </>
     );
}
 
export default DisplayPet;