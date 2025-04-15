import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import { AgregarEmp } from "./empleados/AgregarEmp";
import { EditarEmpleado } from "./empleados/EditarEmpleado";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Navigate to="/empleados" />} />
          <Route path="/empleados" element={<ListadoEmpleados/>} />
          <Route path="/agregar" element={<AgregarEmp/>}/>
          <Route path="/editar/:id" element={<EditarEmpleado/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
