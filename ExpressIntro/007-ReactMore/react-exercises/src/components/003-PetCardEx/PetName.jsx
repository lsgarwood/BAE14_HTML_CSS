const PetName = ({setName}) => {
    return ( 
        <>
        <h5>Enter pet name:</h5>
        <input type="text" name="name" onChange={(event) => {setName(event)}}/>
        </>
     );
}
 
export default PetName;