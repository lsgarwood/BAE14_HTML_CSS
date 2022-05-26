import './css/App.css';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* This will be rendered on EVERY PAGE */}
      <Nav/>
        <Routes>
            {/* When the URL path is / take you to element home */}
            <Route path="/" element={<Home/>}/>
            {/* When the URL path is /about take you to element About */}
            <Route path ="/about" element = {<About/>}/>
            {/* Route with an ID parameter, id can be used in the web page */}
            <Route path="/results" element ={<Results/>}/>
            <Route path="/form" element ={<Form/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
