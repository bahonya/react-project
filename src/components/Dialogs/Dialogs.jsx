import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Misha
                </div>
                <div className={classes.dialog}>
                    Nastya
                </div>
                <div className={classes.dialog}>
                    Kasym
                </div>
                <div className={classes.dialog}>
                    Era
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>2</div>
                <div className={classes.message}>3</div>
            </div>
        </div>
    )
}
export default Dialogs;