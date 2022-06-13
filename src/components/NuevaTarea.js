const NuevaTarea = ({ nuevaTarea, setNuevaTarea, crearTarea }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={crearTarea} className="btn btn-lg btn-success">
            Añadir Tarea
          </button>
        </div>
      </div>
    </>
  );
};

export default NuevaTarea;
