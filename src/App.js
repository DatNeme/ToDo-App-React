import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/Header";
import NuevaTarea from "./components/NuevaTarea";
import TareaUpdate from "./components/TareaUpdate";
import ToDoList from "./components/ToDoList";

function App() {
  // Estado de las tareas
  const [ToDo, setToDo] = useState([]);

  // Estado temporal
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [tareaUpdate, setTareaUpdate] = useState('');

  //Añadir tarea
  const crearTarea = () => {
    if (nuevaTarea) {
      let num = ToDo.length + 1;
      setToDo([
        ...ToDo, 
        { id: num, title: nuevaTarea, status: false }
      ])
      setNuevaTarea('');
    }
  };

  //Eliminar tarea
  const borrarTarea = (id) => {
    setToDo(ToDo.filter(tarea => tarea.id !== id))
  };

  //Tarea completada
  const tareaHecha = (id) => {
    setToDo(ToDo.map(
      tarea => tarea.id === id 
      ? ({ ...tarea, status: !tarea.status }) 
      : (tarea) 
    ))
  };

  //Cambiar tarea para actualizarla
  const actChange = (e) => {
    setTareaUpdate({...tareaUpdate, title: e.target.value})
  };

  //Actualizar tarea
  const actTarea = () => {
    let borrarInfo = [...ToDo].filter(tarea => tarea.id !== tareaUpdate.id)
    setToDo([
      ...borrarInfo, 
      tareaUpdate
    ])
    setTareaUpdate('');
  };

  //Cancelar actualizacion de la tarea
  const actCancel = () => {
    setTareaUpdate('');
  };

  return (
    <>
      <div className="body">
        <div className="text-center">
          <Header></Header>

          {/* Actualizar Tareas */}

          {tareaUpdate && tareaUpdate ? (
            <TareaUpdate
              tareaUpdate={tareaUpdate}
              actChange={actChange}
              actCancel={actCancel}
              actTarea={actTarea}
            />
          ) : (
            <NuevaTarea
              nuevaTarea={nuevaTarea}
              setNuevaTarea={setNuevaTarea}
              crearTarea={crearTarea}
            />
          )}

          {/* Lista de Tareas */}

          {ToDo && ToDo.length ? '' : "No hay tareas pendientes"}

          <ToDoList
            ToDo={ToDo}
            tareaHecha={tareaHecha}
            setTareaUpdate={setTareaUpdate}
            borrarTarea={borrarTarea}
          />
        </div>
      </div>
    </>
  );
}

export default App;
