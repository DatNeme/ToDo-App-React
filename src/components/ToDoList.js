import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";

const ToDoList = ({ ToDo, tareaHecha, setTareaUpdate, borrarTarea }) => {
  return (
    <>
      {ToDo &&
        ToDo.sort((a, b) => (a.id > b.id ? 1 : -1)).map((tarea, index) => {
          return (
            <React.Fragment key={tarea.id}>
              <div className="col fondoTareas">
                <div className={tarea.status ? "hecho" : ""}>
                  <span className="numeroTareas">{index + 1}</span>
                  <span className="textoTareas">{tarea.title}</span>
                </div>

                <div className="iconsCont">
                  <span
                    title="Completado / Sin completar"
                    onClick={(e) => tareaHecha(tarea.id)}
                  >
                    <CheckCircleIcon></CheckCircleIcon>
                  </span>

                  {tarea.status ? null : (
                    <span
                      title="Editar tarea"
                      onClick={() =>
                        setTareaUpdate({
                          id: tarea.id,
                          title: tarea.title,
                          status: tarea.status ? true : false,
                        })
                      }
                    >
                      <Edit></Edit>
                    </span>
                  )}

                  <span
                    title="Eliminar tarea"
                    onClick={() => borrarTarea(tarea.id)}
                  >
                    <DeleteForever></DeleteForever>
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default ToDoList;
