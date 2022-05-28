import axios from 'axios';

const Beer = ({data}) => {

const {id, name, abv, image_url, food_pairing} = data;

    const deleteObj = () => {
        axios.delete(`https://api.punkapi.com/v2/beers/${id}`).then((response) => console.log(response));
    }

    return ( 
        <>
            <h4>Id : {id}</h4>
            <h2> Name: {name}</h2>
            <img src={image_url} alt={name} height="200px"/>
            <h2>ABV: {abv}</h2>
            <ul>
            {
                food_pairing.map((food) => {
                    return <li key={food}>{food}</li>
                })
            }
            </ul>
            <button type="button" onClick={deleteObj}>Delete this Beer!</button>
        </>
     );
}
 
export default Beer;