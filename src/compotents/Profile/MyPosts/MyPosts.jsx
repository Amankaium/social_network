import React from 'react'
import s from './MyPosts.module.css'
import Post from '../../Posts/Post';

const MyPosts = (props) => {   

    let posts = props.posts.map(post => <Post message={post.message} rating={post.rating}/>);

    let postElem = React.createRef();

    const someAction = () => {
        let txt = postElem.current.value;           
        props.addPost(txt);
    };

    return (        
        <div className={s.posts}>
            My Posts
            <div>
                <textarea ref={postElem}></textarea>
                <button onClick={someAction}>Add</button>
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
