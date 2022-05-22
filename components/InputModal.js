import React from 'react';
import {Modal} from 'react-native';
import{
    ModalButton,
    ModalContainer,
    ModalView,
    StyledInput,
    ModalActionGroup,
    ModalAction,
    ModalIcon,
    HeaderTitle,
    colors
} from './../styles/appStyles';
import {AntDesign} from "@expo/vector-icons";
import { Header } from 'react-native/Libraries/NewAppScreen';

const InputModal = ({modalVisible, setModalVisible, todoInputValue, setTodoInputValue, handleAddTodo, todos, setTodoToBeEdited, todoToBeEdited, handleEditTodo}) => {

    const handleCloseModal = () => {
        setModalVisible(false);
        setTodoInputValue("");
        setTodoToBeEdited=(null);
    };

    const handleSubmit = () => {

        if (!todoToBeEdited) {
            handleAddTodo({
                title: todoInputValue,
                date: new Date().toUTCString(),
                key: `${todos[todos.lenght-1] && parseInt(todos[todos.lenght -1].key) + 1}`
               
            });
        } else {
            handleEditTodo({
                title: todoInputValue,
                date: todoToBeEdited.date,
                key: todoToBeEdited.key,

            })
           
        }

        
        
    }





    return( 
        <>

            <ModalButton onPress={() => {setModalVisible(true)}}>
                <AntDesign name="plus" size={30} color={colors.secondary}/>
            </ModalButton>


            <Modal
            
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleCloseModal}
                >
                    
                <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                        <HeaderTitle>Task's</HeaderTitle>
                        <AntDesign name="edit" size={30} color={colors.tertiary}/>
                    </ModalIcon>


                    <StyledInput

                        placeholder="Add Task"
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTodoInputValue(text)}
                        value={todoInputValue}
                        onSubmitEditing={handleSubmit}



                    />

                    <ModalActionGroup>
                        <ModalAction color={colors.primary} onPress={handleCloseModal}>
                            <AntDesign name="close" size={28} color={colors.tertiary}/>
                        </ModalAction>

                        <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                            <AntDesign name="check" size={28} color={colors.secondary}/>
                        </ModalAction>

                    </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
            

        </>


    );
}

export default InputModal;