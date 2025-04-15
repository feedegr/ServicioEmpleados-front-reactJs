import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AgregarEmp = () => {
  
  let navegacion = useNavigate();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: "",
  });

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  }

  const {nombre,departamento,sueldo} = empleado;
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/rh-app/empleados";
    await axios.post(urlBase, empleado);
    navegacion("/");
  };

  

  return (
    <div className="container text-center" style={{ margin: "30px" }}>
      <h3>Agregar Empleado</h3>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <form onSubmit = {(e)=>{onSubmit(e)}} >
            <div className="form-group mb-3">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombre"
                name="nombre"
                required={true}
                value={nombre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="departamento">Departamento</label>
              <input
                type="text"
                className="form-control"
                id="departamento"
                placeholder="Departamento"
                name="departamento"
                value={departamento}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="sueldo">Sueldo</label>
              <input
                type="number"
                className="form-control"
                id="sueldo"
                placeholder="Departamento"
                name="sueldo"
                value={sueldo}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success btn-sm me-3">
                Agregar
              </button>
              <a href="/" className="btn btn-danger btn-sm">
                Regresar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
