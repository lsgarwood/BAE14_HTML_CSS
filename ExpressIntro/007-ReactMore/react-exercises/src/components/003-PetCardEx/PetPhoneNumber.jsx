const PetPhoneNumber = ({setPhoneNumber}) => {
    return ( 
        <>
        <h5>Phone Number:</h5>
        <input type="text" name="phoneNumber" onChange={(event) => setPhoneNumber(event.target.value)}/>
        </>
     );
}
 
export default PetPhoneNumber;