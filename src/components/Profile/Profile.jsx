import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThIxirSF8o6emUYiXOe_ho7MHxltIlkPR9ag&usqp=CAU' alt='content' />
            </div>
            <div>
                avatar+description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;