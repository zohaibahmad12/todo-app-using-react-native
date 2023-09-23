// SharedStateContext.js
import { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [userInput, setUserInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedId, setEditedId] = useState(null);

    const addItemToList = () => {

        if (userInput == "") {

        }
        else {
            const uniqueId = Math.floor(Date.now() / 1000);
            setTodoList([...todoList, { id: uniqueId, name: userInput, isDone: false }]);
            setUserInput("");
        }


    }

    const deleteItemFromList = (id) => {

        const updatedList = todoList.filter((item) => {

            return (item.id != id);
        })

        setTodoList(updatedList)

    }

    const rewriteItem = (id, name) => {

        setUserInput(name);
        setEditedId(id);
    }

    const updateItemInList = () => {

        const itemIndex = todoList.findIndex((item) => item.id == editedId)

        if (itemIndex != -1) {

            const updatedList = [...todoList];

            updatedList[itemIndex].name=userInput;
            setTodoList(updatedList);

            setEditedId(null);
            setUserInput("");
        }
        else {
            setEditedId(null);
            setUserInput("");
        }
    }


    const updateCompletionStatus = (id) => {

        const itemIndex = todoList.findIndex((item) => item.id == id);

        if(itemIndex!=-1){
            const updatedList=[...todoList];
            updatedList[itemIndex].isDone=!(updatedList[itemIndex].isDone);
            setTodoList(updatedList);
        }
    }

    return (
        <SharedStateContext.Provider value={{ userInput, setUserInput, todoList, setTodoList, addItemToList, deleteItemFromList, rewriteItem, updateItemInList, editedId, setEditedId,updateCompletionStatus }}>
            {children}
        </SharedStateContext.Provider>
    );
};

export const useSharedContext = () => {
    return useContext(SharedStateContext);
};
