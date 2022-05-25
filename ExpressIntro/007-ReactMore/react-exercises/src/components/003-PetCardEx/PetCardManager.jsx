import { useState } from "react";
import DisplayPet from "./DisplayPet";
import PetAddress from "./PetAddress";
import PetColor from "./PetColor";
import PetImage from "./PetImage";
import PetIsCute from "./PetIsCute";
import PetName from "./PetName";
import PetPhoneNumber from "./PetPhoneNumber";

const PetCardManager = () => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");
    const [isCute, setIsCute] = useState("");
    const [color, setColor] = useState(null);

    // const petObj = {
    //     name : Smudgie,
    //     phoneNumber : 01234567890,
    //     address : The Cage, BudgieVille,
    //     image : ""
    //     isCute : ""
    //     color : 
    // }

    // const [petData, setPetData] = useState({});

    // const setData = (event) => {
    //     const {name, value} = event.target;
    //     setPetData((prevValue) => ({
    //         ...prevValue, 
    //         [name]:value
    //     }));
    // };

    return ( 
        <div>
            <PetName setName={setName}/>
            <PetPhoneNumber setPhoneNumber={setPhoneNumber}/>
            <PetAddress setAddress={setAddress}/>
            <br/>
            <PetImage setImage={setImage}/>
            <PetIsCute setIsCute={setIsCute}/>
            <PetColor setColor={setColor}/>
            <DisplayPet name={name} phoneNum={phoneNumber} address={address} image={image} isCute={isCute} color={color}/>

        </div>
     );
}
 
export default PetCardManager;