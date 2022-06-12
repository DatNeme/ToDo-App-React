import React from 'react';
import '../App.css';

const ToDoList = () => {
    return (
        <>
            <div className='header text-center'>
                <h1>Lista de Tareas</h1>
                <button className='btn btn-secondary mt-1'>Añadir Tarea</button>
            </div>

            <div className='CardContainer'>

            </div>
        </>
    );
};

export default ToDoList;