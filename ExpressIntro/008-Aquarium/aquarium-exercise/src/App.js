import './css/App.css';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Results from './components/Results';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path ="/about" element = {<About/>}/>
            <Route path="/results/:id" element ={<Results/>}/>
            <Route path="/form" element ={<Form/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
