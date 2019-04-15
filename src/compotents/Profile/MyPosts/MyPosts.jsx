import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {
    return (        
        <div className={s.posts}>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div>
                feed
                <Post message='text of post 1' rating='-3'/>
                <Post message='cat and dog' rating='21'/>
            </div>
        </div>      
    );
}

export default MyPosts;
