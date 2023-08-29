import classes from "./Modal.module.css"
import Button from "../Button/Button";
import Card from "../Card/Card";

export default function Modal(props) {
    return (
        <div className={classes.overlay} onClick={props.onClose}>
            <Card className={classes.modal}>

                <div className={classes.modalHeaderContainer}>
                    <p className={classes.modalHeader}>{props.title}</p>
                </div>

                <div className={classes.modalBody}>
                    <p>{props.message}</p>
                </div>

                <div className={classes.actionsContainer}>
                    <Button onClick={props.onClose}>Okay</Button>
                </div>

            </Card>
        </div>
    )
}

export const defaultModalState = {
    isVisible: false,
    title: "",
    message: "",
    onClose: undefined,
}