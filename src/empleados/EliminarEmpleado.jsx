import axios from 'axios';
import Swal from 'sweetalert2';


export const EliminarEmpleado = ({idEmpleado, onDelete}) => {
    
    const urlBase = "http://localhost:8080/rh-app/empleados";    
   
    const borrarEmpleado = async () => {
        try {
            await axios.delete(`${urlBase}/${idEmpleado}`);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Empleado eliminado correctamente",
                showConfirmButton: false,
                timer: 1500,
            });
            if (onDelete) {
                onDelete(); // Llama a la función onDelete pasada como prop
            }
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Error al eliminar empleado",
                text: error.response?.data?.message || "Error desconocido"
            });
        }
    };

    const confirmarEliminacion = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás recuperar este empleado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminarlo",
        }).then((result) => {
            if (result.isConfirmed) {
                borrarEmpleado();
            }
        });
    }

    return(
        <button className="btn btn-danger" onClick={confirmarEliminacion}>
            Eliminar
        </button>
    );
}
