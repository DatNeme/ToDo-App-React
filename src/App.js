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
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tareaUpdate, setTareaUpdate] = useState("");

  //Añadir tarea
  const crearTarea = () => {
    if (nuevaTarea) {
      let num = ToDo.length + 1;
      let nuevoObjeto = { id: num, title: nuevaTarea, status: false };
      setToDo([...ToDo, nuevoObjeto]);
      setNuevaTarea("");
    }
  };

  //Eliminar tarea
  const borrarTarea = (id) => {
    let tareaMod = ToDo.filter((tarea) => tarea.id !== id);
    setToDo(tareaMod);
  };

  //Tarea completada
  const tareaHecha = (id) => {
    let nuevaTarea = ToDo.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, status: !tarea.status };
      }
      return tarea;
    });
    setToDo(nuevaTarea);
  };

  //Cambiar tarea para actualizarla
  const actChange = (e) => {
    let nuevoObjeto = {
      id: tareaUpdate.id,
      title: e.target.value,
      status: tareaUpdate.status ? true : false,
    };
    setTareaUpdate(nuevoObjeto);
  };

  //Actualizar tarea
  const actTarea = () => {
    let filtrarInfo = [...ToDo].filter((tarea) => tarea.id !== tareaUpdate.id);
    let actObjeto = [...filtrarInfo, tareaUpdate];
    setToDo(actObjeto);
    setTareaUpdate("");
  };

  //Cancelar actualizacion de la tarea
  const actCancel = () => {
    setTareaUpdate("");
  };

  return (
    <>
      <div className="body">
        <div className="container text-center">
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

          {ToDo && ToDo.length ? "" : "No hay tareas pendientes"}

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
