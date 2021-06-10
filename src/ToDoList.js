import React from 'react';
const ToDoList = (props) => {
    return (
        <div className="todo-list-item">
            {props.showInput ?
                <div className="edit-div">
                    <input type="text" value={props.item} 
                      onChange={(event) =>  props.updateHandler(event, props.id)} 
                      className="todo-input" 
                   />
                    <i class="fa fa-check" aria-hidden="true" 
                       onClick={() => props.enableEdit(props.id)}>
                    </i>
                </div> :
                <div className="edit-div">
                    <span>{props.item}</span>  <i class="fa fa-edit" aria-hidden="true" 
                       onClick={() => props.enableEdit(props.id)}>
                    </i>
                </div>
            }
            <i class="fa fa-times" aria-hidden="true" 
                    onClick={() => props.deleteItem(props.id)}>  
            </i>
        </div>
    );
}

export default ToDoList;