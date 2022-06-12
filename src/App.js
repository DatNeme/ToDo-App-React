import './App.css';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {
// Estado de las tareas
const [ToDo, setToDo] = useState([
{id: 1, title: "Tarea 1", status: false},
{id: 2, title: "Tarea 2", status: false}
]);

// Estado temporal
const [nuevaTarea, setNuevaTarea] = useState('');
const [tareaUpdate, setTareaUpdate] = useState ('');

//Añadir tarea
const crearTarea = () =>{

}


//Eliminar tarea
const borrarTarea = (id) =>{

}

//Tarea completada
const tareaHecha = (id) =>{

}

//Cambiar tarea para actualizarla
const actChange = () =>{

}

//Actualizar tarea
const actTarea = () =>{

}


//Cancelar actualizacion de la tarea
const actCancel = () =>{

}


  return (
    <>

    <div className="container text-center">
      {/* Tareas */}

      {ToDo && ToDo.length ? '' : 'No hay tareas pendientes'}

      {ToDo && ToDo
      .map ((tarea, index) => {
        return(
          <React.Fragment key={tarea.id}>
            <span className='textoTarea'>{index + 1}</span>
            <span className='textoTarea'>{tarea.title}</span>
          </React.Fragment>
        )
      })}
    </div>

    </>
  );
}

export default App;
