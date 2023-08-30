import classes from "./Modal.module.css"
import Button from "../Button/Button";
import Card from "../Card/Card";

export default function Modal(props) {

    const onClose = (event) => {
        console.log("event", event)
        console.log("event", event.currentTarget)
        event.stopPropagation();
        props.onClose(event)
    }

    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />
            <Card className={classes.modal}>

                <header className={classes.modalHeaderContainer}>
                    <h2 className={classes.modalHeader}>{props.title}</h2>
                </header>

                <div className={classes.modalBody}>
                    {props.messages.map((message) => (
                        <p key={message}>{message}</p>
                    ))}
                </div>

                <footer className={classes.actionsContainer}>
                    <Button onClick={props.onClose}>Okay</Button>
                </footer>

            </Card>
        </>
    )
}

export const defaultModalState = {
    isVisible: false,
    title: "",
    messages: [],
    onClose: undefined,
}
