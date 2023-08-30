import {useState} from "react";
import Modal, {defaultModalState} from "../../components/Modals/Modal";
import Form from "../../components/Form/Form";
import UserList from "../../components/UserList/UserList";

export default function UserFormScreen() {
    const [users, setUsers] = useState([])
    const [modalState, setModalState] = useState(defaultModalState)

    const onFormError = (error) => {
        setModalState({
                ...defaultModalState,
                isVisible: true,
                title: error.title,
                messages: error.messages,
                onClose: () => setModalState({...defaultModalState}),
            }
        )
    }

    const onSubmit = (user) => {
        setUsers(prevState => {
            console.log("prev", prevState)
            return [
                ...prevState,
                user,
            ]
        })
    }

    return (
        <div className={"container"}>
            <Form
                users={users}
                onError={onFormError}
                onSubmit={onSubmit}
            />
            <UserList users={users}/>
            {modalState.isVisible &&
                <Modal
                    title={modalState.title}
                    messages={modalState.messages}
                    onClose={modalState.onClose}
                />}
        </div>
    )
}
