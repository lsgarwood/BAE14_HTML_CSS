const PetName = ({setData}) => {
    return ( 
        <>
        <h5>Enter pet name:</h5>
        <input type="text" name="name" onChange={(event) => {setData(event)}}/>
        </>
     );
}
 
export default PetName;