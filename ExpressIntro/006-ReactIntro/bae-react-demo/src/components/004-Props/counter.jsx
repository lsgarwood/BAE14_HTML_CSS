const Counter = (props) => {
    const score = props.score;
    return ( 
        <h2>The score is currently {score}</h2>
     );
}
 
export default Counter;