import React from 'react';
import {
        postChangeActionCreator,
        addPostActionCreator} from '../../redux/postReducer';


const AddPost = (props) => {

    const postChange = e => {
        const postNewText = e.target.value;
        props.dispatch(postChangeActionCreator(postNewText));
    };

    const addPost = () => props.dispatch(addPostActionCreator());

    return (
        <div>
            <textarea
                value={props.postText}
                onChange={postChange}/>
            <button onClick={addPost}>Add</button>
        </div>
    );
}


export default AddPost;
