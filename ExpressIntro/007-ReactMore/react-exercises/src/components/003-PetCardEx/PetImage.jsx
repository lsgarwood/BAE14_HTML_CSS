const PetImage = ({setImage, setName}) => {
    return ( 
        <>
        <h5>Add Image URL:</h5>
        <input type="text" name="image" alt={setName} onChange={(event) => setImage(event.target.value)}/>
        </>
     );
}
 
export default PetImage;