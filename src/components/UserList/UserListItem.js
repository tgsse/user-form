import classes from "./UserListItem.module.css"

export default function UserListItem(props) {
    return (
        <p className={classes.listItem}>{props.user.name} ({props.user.age} old)</p>
    )
}