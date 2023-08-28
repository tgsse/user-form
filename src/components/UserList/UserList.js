import UserListItem from "./UserListItem";
import Card from "../Card/Card";

export default function UserList(props) {
    return props.users.length ? (
            <Card>
                {props.users.map(user => (
                    <UserListItem user={user}/>
                ))}
            </Card>)
        : null

}