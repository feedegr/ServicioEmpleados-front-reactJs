## Recursos Humanos App

**Recursos Humanos App** es una aplicación web diseñada para gestionar empleados en una organización. Permite realizar operaciones básicas como listar, editar y eliminar empleados, proporcionando una interfaz intuitiva y funcional para los usuarios.

### Características principales:
- **Listado de empleados:** Muestra una tabla con información detallada de los empleados, incluyendo su ID, nombre, departamento y sueldo.
- **Edición de empleados:** Redirección a un formulario para editar la información de un empleado específico.
- **Eliminación de empleados:** Permite eliminar empleados con confirmación previa mediante un cuadro de diálogo interactivo.
- **Notificaciones:** Uso de SweetAlert2 para mostrar mensajes de éxito o error al realizar acciones como eliminar empleados.
- **Formato de datos:** Uso de `react-number-format` para mostrar los sueldos con formato numérico adecuado.

### Tecnologías utilizadas:
- **Frontend:**
  - React.js
  - Axios (para realizar solicitudes HTTP)
  - SweetAlert2 (para notificaciones y confirmaciones)
  - React Router (para navegación entre vistas)
  - react-number-format (para formateo de números)

- **Backend:**
  - La aplicación hace peticiones al puerto backend (Java Spring Boot y SQL)  corriendo en `http://localhost:8080/rh-app/empleados` que expone endpoints RESTful para gestionar empleados.

### Estructura del proyecto:
- **`src/empleados/ListadoEmpleados.jsx`:** Componente principal que muestra la lista de empleados y permite interactuar con ellos.
- **`src/empleados/EliminarEmpleado.jsx`:** Componente que maneja la lógica para eliminar empleados con confirmación previa.
- **`src/App.css`:** Estilos generales de la aplicación.

