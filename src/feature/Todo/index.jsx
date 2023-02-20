import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import TodoList from './component/TodoList';


TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const inittodoList = [
        {
            id:1,
            title:'Eat',
             status: 'new'
        }, 
        {
            id:2,
            title:'Sleep',
            status: 'completed'
        },
        {
            id:3,
            title:'Code',
            status: 'new'
        },
    ]
    const [todoList,settodoList] = useState(inittodoList); //tạo một State
    const [filteredStatus,setfilteredStatus]= useState('all');
    const handleTodoClick = (todo,idx)=>{
        // clone current array to the new one
        const newTodoList =[...todoList];
        console.log(todo,idx);

        // toogle state
        newTodoList[idx]={
            ...newTodoList[idx],
            status : newTodoList[idx].status == 'new'?'completed':'new',
        }

        // update todolist
        settodoList(newTodoList);
    }
    const handleShowAllClick = () =>{
        setfilteredStatus('all');
    }
    const handleShowCompletedClick = () =>{
        setfilteredStatus('completed');
    }
    const handleShowNewClick = () =>{
        setfilteredStatus('new');
    }
    
    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    // console.log(renderedTodoList);
        return (
        <div>
             <h3> TODO LIST</h3>
             <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />{/* {khi ai đó click sẽ gọi đến hàm handleTodoClick} */}
              
            <div>
                <button onClick={handleShowAllClick}>Show All Click</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>

        </div>
    );
}

export default TodoFeature;