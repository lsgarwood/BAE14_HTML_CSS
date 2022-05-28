import { useParams } from "react-router-dom";

const Results = () => {

    const {id} = useParams;
    console.log(id);

    return ( 
        <h3>Your fishy search result: {id}</h3>
     );
}
 
export default Results;