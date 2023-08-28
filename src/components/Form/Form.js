import Button from "../Button/Button"
import {useState} from "react"
import Input from "../Input/Input";
import classes from "./Form.module.css"
import Card from "../Card/Card";

export default function Form() {

    const [name, setName] = useState()
    const [age, setAge] = useState()

    const onSubmit = event => {
        event.preventDefault()
        console.log(`submit ${name} ${age}`)
    }

    const onNameChange = event => {
        setName(event.target.value)
    }

    const onAgeChange = event => {
        setAge(event.target.value)
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
