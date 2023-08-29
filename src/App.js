import Form from "./components/Form/Form"
import {useState} from "react";
import UserList from "./components/UserList/UserList";
import Modal, {defaultModalState} from "./components/Modals/Modal";


function App() {

    const [users, setUsers] = useState([])
    const [modalState, setModalState] = useState(defaultModalState)

    const onFormError = (error) => {
        setModalState({
                ...defaultModalState,
                isVisible: true,
                title: error.message,
                message: error.details,
                onClose: () => setModalState({ ...defaultModalState }),
            }
        )
    }

    return (
        <>
            <Form users={users} onError={onFormError}/>
            <UserList users={users}/>
            {modalState.isVisible && <Modal {...modalState}/>}
        </>
    )
}

export default App;
