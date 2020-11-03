import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={props.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Nastya" id="1"/>
                <DialogItem name="Bahonya" id="2"/>
                <DialogItem name="Misha" id="3" />
                <DialogItem name="Era" id="4" />
                <DialogItem name="Kasym" id="5" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="1" />
                <Message message="2" />
            </div>
        </div>
    )
}
export default Dialogs;