import classes from "./Input.module.css"

export default function Input(props) {
    return (
        <div className={classes.inputGroup}>
            <label className={classes.label} htmlFor={props.id}>{props.label}</label>
            <input
                className={classes.input}
                {...props}
            />
        </div>
    )
}