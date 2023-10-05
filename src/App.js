import { Navbar } from "./components/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Events } from "./components/Pages/Events";
import { Contact } from "./components/Pages/Contact";

function App() {
  return (
    <BrowserRouter >
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
