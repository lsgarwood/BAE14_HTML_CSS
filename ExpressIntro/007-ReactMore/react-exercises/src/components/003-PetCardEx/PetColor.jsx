const PetColor = ({color, setColor}) => {
    return (
      <>
      <h5>What colour am I?:</h5>
      <input type="color" name="color" value={color} onChange={e => setColor(e.target.value)} />
      </>
  );
}
 
export default PetColor;