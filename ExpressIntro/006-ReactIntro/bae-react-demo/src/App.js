import AboutMe from './components/001-Components/AboutMe';
import HelloWorld from './components/001-Components/HelloWorld';
import ECommerceApp from './components/002-Hierarchy/E-Commerce-App';
import WebPage from './components/003-WebPageEx/WebPage';
import ItemManager from './components/004-Props/ItemManager';
import Manager from './components/004-Props/Manager';
import PetContactCardManager from './components/005-PetContactCardBook/PetConactCardManager';
import StateManager from './components/006-State/StateManager';
import StateManagerTwo from './components/006-State/StateRecap/StateManagerTwo';

import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld/>
      <AboutMe/>
      <ECommerceApp/>
      <WebPage/>
      <Manager/>
      <ItemManager/> */}
      <PetContactCardManager/>
      {/*<StateManager/> 
      <StateManagerTwo/>*/}
    </div>
  );
}

export default App;
