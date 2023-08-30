import UserListItem from "./UserListItem";
import Card from "../Card/Card";
import classes from "./UserList.module.css"

export default function UserList(props) {
    return props.users.length ? (
            <Card>
                <p className={classes.title}>Users</p>
                <ul>
                    {props.users.map(user => (
                        <li>
                            <UserListItem key={user.name} user={user}/>
                        </li>
                    ))}
                </ul>
            </Card>)
        : null
}