const TareaUpdate = ({ tareaUpdate, actChange, actCancel, actTarea }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={tareaUpdate && tareaUpdate.title}
            onChange={(e) => actChange(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20" onClick={actTarea}>
            Actualizar
          </button>
          <button className="btn btn-lg btn-warning" onClick={actCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};

export default TareaUpdate;
