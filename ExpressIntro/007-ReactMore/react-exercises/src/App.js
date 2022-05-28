
import StateManager from './components/001-StateRecap/001-StateRecapEx/StateManager';
import ManagerForm from './components/002-Forms/FormsWithState/ManagerForm';
import PrintText from './components/002-Forms/PrintText';
import PetCardManager from './components/003-PetCardEx/PetCardManager';
import OrderForm from './components/004-PizzaEx/OrderForm';
import PizzaArrayForm from './components/005-ArrayObjects/PizzaArrayForm';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";


import './css/App.css';
import Nav from './components/006-Routing/Nav';
import Home from './components/006-Routing/Home';
import About from './components/006-Routing/About';
import Shop from './components/006-Routing/Shop';
import Clock from './components/007-Hooks/Clock';
import Bar from './components/008-DataRequests/Bar';

function App() {
  return (
    <>
    {/* <div className="App"> 
      <OrderForm/>
      <StateManager/>
      <PrintText/>
      <PetCardManager/>
      <ManagerForm/> 
      <PetCardManager/>
      <PizzaArrayForm/>
      <Clock/>
    </div> */}
    <Bar/>
    {/* <BrowserRouter>
    
    <Nav/>
    <Routes>
     
        <Route path="/" element={<Home/>}/>
       
        <Route path ="/about" element = {<About/>}/>

        <Route path="/shop" element ={<Shop/>}/>
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
