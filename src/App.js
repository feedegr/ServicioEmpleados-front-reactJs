import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListadoEmpleados from "./empleados/ListadoEmpleados";


function App() {
  return (
    
    <div className="container">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/empleados" element={<ListadoEmpleados/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
