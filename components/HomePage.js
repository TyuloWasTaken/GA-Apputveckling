
// Imports


import React, {useState} from "react";
import Header from "./HeaderPage";
import ListItems from "./ListItemsPage";
import InputModal from "./InputModal";

//


const Home = () => {


    // Initial Task's
    const initialTodos = [{
        title: "Study!",
        date: "Fri, 12 Jan",
        key: 1,

    },{
        title: "Study Programming!",
        date: "Fri, 12 Jan",
        key: 2,

    },{
        title: "Study Mathematics",
        date: "Fri, 12 Jan",
        key: 3,

    }]




    const [todos, setTodos] = useState(initialTodos)

    //Nuclear Tasks
    const handleClearTodos = () => {
        setTodos([]);
    }


    //Modal Ghosting

    const [modalVisible, setModalVisible] = useState(false);
    const [todoInputValue, setTodoInputValue] = useState();

    //Func Add task

    const handleAddTodo = (todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        setModalVisible(false);

    }

    //Trigger Editing

    const [todoToBeEdited, SetTodoToBeEdited] = useState(null);


    const handleTriggerEdit = (item) => {
        SetTodoToBeEdited(item);
        setModalVisible(true);
        setTodoInputValue(item.title);
    }

    const handleEditTodo = (editedTodo) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key == editedTodo.key)
        newTodos.splice(todoIndex, 1, editedTodo);
        setTodos(newTodos);
        SetTodoToBeEdited(null);
        setModalVisible(false);
    }



    return(
        <>
        <Header handleClearTodos={handleClearTodos} />
        <ListItems
            todos={todos}
            setTodos={setTodos}
            handleTriggerEdit={handleTriggerEdit}

        />
        <InputModal
        
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
            handleAddTodo={handleAddTodo}
            todos={todos}
            todoToBeEdited={todoToBeEdited}
            SetTodoToBeEdited={SetTodoToBeEdited}
            handleTriggerEdit={handleTriggerEdit}
            handleEditTodo={handleEditTodo}

        />
        </>
    );
}



export default Home;