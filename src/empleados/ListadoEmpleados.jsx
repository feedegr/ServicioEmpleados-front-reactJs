import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import '../App.css';
import { EliminarEmpleado } from './EliminarEmpleado';

export default function ListadoEmpleados() {
  
    const urlBase = "http://localhost:8080/rh-app/empleados"
    const [empleados, setEmpleados] = useState([])
    
    useEffect(() => {
      cargarEmpleados();   
    }, []);

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        setEmpleados(resultado.data);
    }


    const prepararValoresEmpleado = (empleado) => {
        return {
            value: empleado.sueldo,
            displayType: 'text',
            thousandSeparator: ",",
            prefix: '$',
            decimalScale: 2,
            fixedDecimalScale: true
        };
    };
    
    return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Empleados de Recursos Humanos</h3>
        </div>
        <table className="table table-striped table-hover align-middle">
            <thead className='table-dark'>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Empleado</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Sueldo</th>
                    <th style={{ backgroundColor: "black", color: "white" }}></th>
                </tr>
            </thead>
            <tbody>
                {
                 //iterar empleados
                 empleados.map((empleado,indice) =>
                (
                <tr key={indice}>
                    <th scope="row">
                        {empleado.idEmpleado}
                    </th>
                    <td>
                        {empleado.nombre}
                    </td>
                    <td>
                        {empleado.departamento}
                    </td>
                    <td>
                        <NumericFormat {...prepararValoresEmpleado(empleado)} />
                    </td>
                
                    <td className='text-center'>
                        <div>
                            <Link to={`/editar/${empleado.idEmpleado}`}
                            className='btn btn-warning btn-sm me-3'>Editar</Link>
                            <EliminarEmpleado
                            idEmpleado={empleado.idEmpleado}
                            onDelete={cargarEmpleados} // Refresca la lista después de eliminar
                            />
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
