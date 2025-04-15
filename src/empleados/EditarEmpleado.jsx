import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export const EditarEmpleado = () => {
  
  let navegacion = useNavigate();
  const {id} = useParams();
  const urlBase = "http://localhost:8080/rh-app/empleados";

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: "",
  });

  const [mensaje, setMensaje] = useState(null); // Guarda el mensaje
  const [tipoMensaje, setTipoMensaje] = useState(""); // Define el tipo: "success" o "error"

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  }

  const {nombre,departamento,sueldo} = empleado;
  
  const cargarEmpleado = async () => {
    const resultado = await axios.get(`${urlBase}/${id}`)
    setEmpleado(resultado.data);
  }
  
  useEffect(() => {
    cargarEmpleado();
  },[]);

  
  async function onSubmit(e) {
    e.preventDefault();
    const urlBase = "http://localhost:8080/rh-app/empleados";
    try {
      
      await axios.put(`${urlBase}/${id}`, empleado);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Empleado editado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setMensaje("Error al editar empleado.");
      setTipoMensaje("Error");
    }
    navegacion("/");
  }
  
  

  return (
    <div className="container text-center" style={{ margin: "30px" }}>
      <h3>Editar Empleado</h3>
      
      {mensaje && (
        <div
          className={`alert ${tipoMensaje === "success" ? "alert-success" : "alert-danger"}`}
          role="alert"
        >
          {mensaje}
        </div>
      )}

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
                pattern="^[a-zA-Z\s]*$" 
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
                required={true}
                pattern="^[a-zA-Z\s]*$" 
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
                Guardar
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
