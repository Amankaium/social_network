import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {   

    let posts = props.posts.map(post => <Post message={post.message} rating={post.rating}/>);

    return (        
        <div className={s.posts}>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div>
                <hr/>
                feed
                {posts}
            </div>
        </div>      
    );
}

export default MyPosts;
