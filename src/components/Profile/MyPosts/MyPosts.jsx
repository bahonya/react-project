import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>AddPost</button>
                <button>Remove</button>
            </div>
            <div>
                <Post message='Hello, World!' number='55'/>
                <Post message='it is my fourth post' number='-20'/>
                <Post message='it is my third post' number='-10'/>
                <Post message='it is my second post' number='0'/>
                <Post message='it is my first post' number='10'/>
            </div>
        </div>
    );
}

export default MyPosts;