const PetAddress = ({setAddress}) => {
    return ( 
        <>
        <h5>Address:</h5>
        <input type="text" name="address" onChange={(event) => setAddress(event.target.value)}/>
        </>
     );
}
 
export default PetAddress;