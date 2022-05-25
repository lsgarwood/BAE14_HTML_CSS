import Pet from "./Pet";

const PetContactCardManager = () => {
    return ( 
        <div>
            <Pet id="card" name="Smudgie" phoneNum="07123486519" address="The Cage of Budgieville" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EINEepcXJeHRhR-8jirCNIUvtSutBVYE0Q&usqp=CAU" isCute={true}/>
            <Pet name="Bob" phoneNum="03321675490" address="Cage of Doom, Feather Road" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggzFVP8Ki4_J32-YbSPpgs2QwHdhrRCULJg&usqp=CAU" isCute={false}/>
        </div>
     );
}
 
export default PetContactCardManager;