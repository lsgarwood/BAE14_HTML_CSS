const PetIsCute = ({setIsCute}) => {



    return ( 
        <>
        <h5>Am I cute or what?!</h5>
        <input type="radio" name="isCute" value=" So so cute!" onChange={(event) => setIsCute(event.target.value)}/> Super Cute
        <input type="radio" name="isCute" value=" Viscious tiny beast and not to be trusted!" onChange={(event) => setIsCute(event.target.value)}/> Viscious
        </>
     );
}
 
export default PetIsCute;