/* eslint-disable react/prop-types */
import React, { useState } from "react";


// eslint-disable-next-line react/prop-types
const Todo = ({text,todo,todos,settodos}) => {
    const [success, setsuccess] = useState(null);
    const [failed, setfailed] = useState("");
   

    const deleteHandler=()=>{
        // eslint-disable-next-line react/prop-types
        settodos(todos.filter((el) => el.id !== todo.id));

    }

  
    const submit = async (e) => {
      e.preventDefault();

      const response = await fetch(
        "http://127.0.0.1:7000/to-do-list/delete-Event?eventId=126",
        {
          method: "DELETE",
          headers: { "x-auth-token": localStorage.getItem("token") },
          withCredentials: true,
        }
      );
      const content = await response.json();
      try {
        setsuccess(content.message);
        setfailed(content.error.message);
        console.log(success);
        console.log(failed);
      } catch (err) {
        console.error(err.message);
      }
    };

    const completehandler=()=>{
        // eslint-disable-next-line react/prop-types
        settodos(todos.map(items=>{
            // eslint-disable-next-line react/prop-types
            if(items.id===todo.id){
                return{
                    ...items,completed: !items.completed
                }
            }
            return items;
        }))
    }
    
     
  return (
      <div className="todo">
          <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
          <button onClick={completehandler} className="complete-btn"><i className="fas fa-check"></i></button>
          <button onClick={deleteHandler} onClickCapture={submit} className="trash-btn" ><i className="fas fa-trash" ></i></button>
      </div>

    
  );
  }
export default Todo;
