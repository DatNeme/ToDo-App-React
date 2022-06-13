import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';

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
  <div className='body'>
    <ToDoList></ToDoList>
    <div className="container text-center">
      {/* Tareas */}

      {ToDo && ToDo.length ? '' : 'No hay tareas pendientes'}

      {ToDo && ToDo
      .sort((a, b)=> a.id > b.id ? 1 : -1)
      .map ((tarea, index) => {
        return(
          <React.Fragment key={tarea.id}>

          <div className='col fondoTareas'>

            <div className={tarea.status ? 'hecho' : ''}>
              <span className='numeroTareas'>{index + 1}</span>
              <span className='textoTareas'>{tarea.title}</span>
            </div>

            <div className='iconsCont'>
              <span title='Completado / Sin completar'>
                <CheckCircleIcon></CheckCircleIcon>
              </span>
              <span title='Editar tarea'>
                <Edit></Edit>
              </span>
              <span title='Eliminar tarea'>
                <DeleteForever></DeleteForever>
              </span>
            </div>

          </div>

            
          </React.Fragment>
        )
      })}
    </div>
  </div>
  </>
  );
}

export default App;
