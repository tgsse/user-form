import Form from "./components/Form/Form"
import {useState} from "react";
import UserList from "./components/UserList/UserList";


function App() {

    const [users, setUsers] = useState([])

    return (
        <>
            <Form/>
            <UserList users={users} />
        </>
    )
}

export default App;
