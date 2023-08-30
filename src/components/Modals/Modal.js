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
            <div className={classes.overlay} onClick={onClose} />
            <Card className={classes.modal}>

                <div className={classes.modalHeaderContainer}>
                    <p className={classes.modalHeader}>{props.title}</p>
                </div>

                <div className={classes.modalBody}>
                    {props.messages.map((message) => (
                        <p key={message}>{message}</p>
                    ))}
                </div>

                <div className={classes.actionsContainer}>
                    <Button onClick={props.onClose}>Okay</Button>
                </div>

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