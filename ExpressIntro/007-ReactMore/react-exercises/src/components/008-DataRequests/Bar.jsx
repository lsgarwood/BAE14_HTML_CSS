import { useState, useEffect } from "react";
import axios from 'axios';
import Beer from "./Beer";

const Bar = () => {

    const [beerList, setBeerList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [name, setName] = useState("");
    const [abv, setAbv] = useState(""); 

    useEffect(() => {
        setTimeout(getData, 2000)
    },[]);

    const getData = () => {
        axios.get("https://api.punkapi.com/v2/beers")
        .then((response) => {
            console.log(response.data);
            setBeerList(response.data);
            console.log(beerList);
            setLoaded(true);
        });
    }

    const postData = () => {
        axios.post("https://api.punkapi.com/v2/beers", {
            name: name,
            abv: abv
        }).then((response) => {
            console.log(response);
        })
    }

    if(loaded){
        return (  
        <div>
            <input type="text" onChange={(event) => setName(event.target.value)} placeholder="enter name"/>
            <input type="text" onChange={(event) => setAbv(event.target.value)} placeholder="enter ABV"/>
            <button type='button' onClick={postData}>Click to Add</button>
            <h2> Bar </h2>
            {
                beerList.map((beer) => {
                    return <Beer data={beer}/>
                })
            }
        </div>
    );
    }else{
        return(<h2>Please wait...your beers are loading</h2>)
    }
}
 
export default Bar;