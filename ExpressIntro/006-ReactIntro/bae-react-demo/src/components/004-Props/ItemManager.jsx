import Item from "./Item";

const ItemManager = () => {
    return (
        <>
            <Item name="pumpkin" image="pumpkin-image.jpg" cost={12.23}/>
            <Item name="carrot" image="carrot-image.jpg" cost={0.22}/>
        </>
      );
}
 
export default ItemManager;