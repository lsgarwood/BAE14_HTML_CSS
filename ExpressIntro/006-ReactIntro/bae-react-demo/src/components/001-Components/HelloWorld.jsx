//This component will be used to add 2 <h2> to our page

const HelloWorld = () => {
    return (
        <>
            <h2> Hello Everyone!</h2>
            <h3>This lesson is fun!</h3>
            <p> This is my paragraph of cool stuff
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Blue_male_budgie.jpg" alt="blue budgie" height="200px"/>
        </>
        // react fragment doesnt show up in the inpspector
    );
};

export default HelloWorld;