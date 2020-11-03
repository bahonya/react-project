import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThIxirSF8o6emUYiXOe_ho7MHxltIlkPR9ag&usqp=CAU' alt='content' />
            </div>
            <div className={classes.descriptionBlock}>
                avatar+description
            </div>
        </div>
    );
}

export default ProfileInfo;