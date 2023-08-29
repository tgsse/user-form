import Button from "../Button/Button"
import {useState} from "react"
import Input from "../Input/Input";
import classes from "./Form.module.css"
import Card from "../Card/Card";

const Constants = {
    minAge: 18,
}

function FormError(title, message) {
    this.title = title
    this.message = message
    return this
}

export default function Form(props) {

    const [name, setName] = useState()
    const [age, setAge] = useState()

    const onSubmit = event => {
        event.preventDefault()
        const errors = validate()
        if (errors) {
            onError(errors)
            console.log(`error while submitting ${name} ${age}`)
            return
        }
        console.log(`submit ${name} ${age}`)

    }

    const validate = () => {
        const errors = []
        if (props.users.includes(name)) {
            errors.push(new FormError(
                "Invalid input",
                `The name ${name} has already been taken by someone.`))
        }

        if (age < Constants.minAge) {
            errors.push(new FormError(
                "Invalid Input",
                `Users have to be at least ${Constants.minAge} years old to be added.`))
        }
        return errors ? errors : null
    }

    const onNameChange = event => {
        setName(event.target.value)
    }

    const onAgeChange = event => {
        setAge(event.target.value)
    }

    const onError = (errors) => {
        props.onError(errors)
    }

    return (
        <Card>
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
