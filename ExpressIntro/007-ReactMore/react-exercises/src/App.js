
import StateManager from './components/001-StateRecap/001-StateRecapEx/StateManager';
import ManagerForm from './components/002-Forms/FormsWithState/ManagerForm';
import PrintText from './components/002-Forms/PrintText';
import PetCardManager from './components/003-PetCardEx/PetCardManager';
import OrderForm from './components/004-PizzaEx/OrderForm';

import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* 
      <OrderForm/>
      <StateManager/>
      <PrintText/>
      <PetCardManager/>
      <ManagerForm/> 
      */}
      <PetCardManager/>
    </div>
  );
}

export default App;
