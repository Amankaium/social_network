import React from 'react'
import s from './MyPosts.module.css'
import Post from '../Posts/Post';
import AddPost from '../Posts/AddPost';

const MyPosts = (props) => {   

    let posts = props.posts.posts.map(post => <Post message={post.message} rating={post.rating}/>);

    return (        
        <div className={s.posts}>
            My Posts
            <AddPost
                dispatch={props.dispatch}
                postText={props.posts.postText}
            />
            <div>
                <hr/>
                feed
                {posts}
            </div>
        </div>      
    );
}

export default MyPosts;
