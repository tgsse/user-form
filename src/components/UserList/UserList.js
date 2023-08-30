import UserListItem from "./UserListItem";
import Card from "../Card/Card";
import classes from "./UserList.module.css"

export default function UserList(props) {
    return props.users.length ? (
            <Card>
                <p className={classes.title}>Users</p>
                {props.users.map(user => (
                    <UserListItem user={user}/>
                ))}
            </Card>)
        : null

}