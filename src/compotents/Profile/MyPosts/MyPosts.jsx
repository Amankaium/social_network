import React from 'react'
import s from './MyPosts.module.css'
import Post from '../../Posts/Post';

const MyPosts = (props) => {   

    let posts = props.posts.posts.map(post => <Post message={post.message} rating={post.rating}/>);

    let postElem = React.createRef();

    const addPost = () => {
        let txt = postElem.current.value;           
        props.addPost(txt);
    };
    
    const changeText = () => {
        let text = postElem.current.value;
        props.postChange(text);
    };

    return (        
        <div className={s.posts}>
            My Posts
            <div>
                <textarea
                    ref={postElem}
                    value={props.posts.postText}
                    onChange={changeText}/>
                <button onClick={addPost}>Add</button>
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
