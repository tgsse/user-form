import classes from "./UserListItem.module.css"

export default function UserListItem(props) {
    return (
        <p className={classes.listItem}>
            <span className={classes.name}>{props.user.name}</span> ({props.user.age} years old)</p>
    )
}