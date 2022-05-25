const AboutMe = () => {

    const name = "Lauren";

    let favColour = "Emerald Green";

    const favPizza = "Hawaiian";

    const currentDate = new Date();

    // if(favPizza === "Hawaiian"){
    //     return "Youre the best!"
    // }

    return(
        <>
            <h2>Guess what..I love budgies!</h2>
            <h4>My name is {name} </h4>
            <h4>My fave colour is {favColour
            } </h4>
            <h5> The current date is {currentDate.toLocaleDateString()} </h5>
        </>

    )
}

export default AboutMe;