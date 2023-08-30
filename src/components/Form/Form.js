import Button from "../Button/Button"
import {useState} from "react"
import Input from "../Input/Input";
import classes from "./Form.module.css"
import Card from "../Card/Card";
import User from "../../model/User"

const Constants = {
    minAge: 18,
}

function FormError(title, messages) {
    this.title = title
    this.messages = messages
    return this
}

export default function Form(props) {

    const [name, setName] = useState("")
    const [age, setAge] = useState(undefined)

    const onSubmit = event => {
        event.preventDefault()
        const errors = validate()
        if (errors) {
            onError(errors)
            return
        }
        props.onSubmit(new User(name, age))
    }

    const validate = () => {
        const errors = []
        if (name === undefined || name.length === 0) {
            errors.push(`Please enter a name first.`)
        }
        if (age === undefined) {
            errors.push(`Please enter users age.`)
        }

        if (props.users.findIndex(u => u.name === name) !== -1) {
            errors.push(`The name ${name} has already been taken by someone.`)
        }

        if (age < Constants.minAge) {
            errors.push(`Users have to be at least ${Constants.minAge} years old to be added.`)
        }
        return errors.length > 0 ? errors : null
    }

    const onNameChange = event => {
        setName(event.target.value)
    }

    const onAgeChange = event => {
        setAge(event.target.value)
    }

    const onError = (errors) => {
        props.onError(new FormError("Invalid input", errors))
    }

    return (
        <Card className={classes.formCard}>
            <form className={classes.form}>
                <Input label={"Name"} id={"name"} value={name} onChange={onNameChange}/>
                <Input label={"Age"} id={"age"} value={age} onChange={onAgeChange} type={"number"} min={0} max={150}/>
                <div className={classes.actionContainer}>
                    <Button type={"submit"} onClick={onSubmit}>Add user</Button>
                </div>
            </form>
        </Card>
    )
}
