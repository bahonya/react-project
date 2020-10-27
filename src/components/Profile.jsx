import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThIxirSF8o6emUYiXOe_ho7MHxltIlkPR9ag&usqp=CAU' alt='content' />
            </div>
            <div>
                avatar+description
        </div>
            <div>
                My posts
          <div>
                    New post
          </div>
                <div>
                    <div className={classes.item}>
                        Post1
            </div>
                    <div className={classes.item}>
                        Post2
            </div>
                    <div className={classes.item}>
                        Post3
            </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;