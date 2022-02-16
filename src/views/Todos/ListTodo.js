import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state={
        listTodos: [
            {id:'todo1',title:'Doing homework'},
            {id:'todo2',title:'Making video'},
            {id:'todo3',title:'Fixing bugs'},
        ],
        editTodo: {}
    }
    addNewTodo = (todo)=>{
        this.setState({
            listTodos: [...this.state.listTodos,todo]
        })
        toast.success("Wow so easy!");
    }
    handleDeleteTodo = (todo)=>{
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete succeed!");
    }
    handleOnChangeEditTodo = (event)=>{
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos }=this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if(isEmptyObj===false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos];
            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("update succeed!");
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }
    render(){
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return(
            <div className="list-todo-container">
               <AddTodo 
                addNewTodo={this.addNewTodo}
               />
                <div className="list-todo-content">
                    {listTodos && listTodos.length>0 && listTodos.map((item,index)=>{
                        return(
                            <> 
                            <p>
                            Hello world react.js Duc
                           </p>
                            <div className="todo-child" key={item.id}>
                                { isEmptyObj===false ?
                                    <>
                                        {editTodo.id===item.id ?
                                        <span>{index + 1} - <input value={editTodo.title} onChange={(event)=>this.handleOnChangeEditTodo(event)}/></span>
                                        :
                                        <span>{index+1} - {item.title} </span>
                                        }
                                    </>
                                     :
                                    <span>{index+1} - {item.title} </span>
                                }
                                <button className="edit" onClick={()=>{this.handleEditTodo(item)}}>
                                    {isEmptyObj===false && editTodo.id===item.id ?
                                    'Save'
                                    :
                                    'Edit'
                                }
                                </button>
                                <button className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListTodo;