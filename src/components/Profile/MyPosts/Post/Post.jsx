import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.number}>
                {props.number}
            </div>
            <img src='https://png.pngitem.com/pimgs/s/71-715538_reddit-arrow-transparent-background-reddit-upvote-icon-hd.png' alt='upvote' className={classes.upvote}/>
            <img src='https://www.pngfind.com/pngs/m/420-4207654_imgflip-downvote-windows-10-videos-icon-hd-png.png' alt='downvote' className={classes.downvote}/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg9gHshxsVtYWL49riFSuV9cfoBhI573JsQQ&usqp=CAU' alt='avatar' className={classes.avatar}/>
            <div className={classes.message}>
                {props.message}
            </div>
        </div>
    );
}

export default Post;