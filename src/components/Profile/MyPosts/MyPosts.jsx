import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hello, World!' number='55' />
                <Post message='it is my fourth post' number='-20' />
                <Post message='it is my third post' number='-10' />
                <Post message='it is my second post' number='0' />
                <Post message='it is my first post' number='10' />
            </div>
        </div>
    );
}

export default MyPosts;