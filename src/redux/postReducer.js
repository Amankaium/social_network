const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';

let initialState = {
    posts: [
        {id: 1, message: 'text of post one', rating: -3},
        {id: 2, message: 'cat and dog are pets duh', rating: 21},
        {id: 3, message: '10 hours coding challenge', rating: 147}
    ],    
    postText: '',
}

const postReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.postText,
                rating: 0
            };
            state.posts.push(newPost);
            state.postText = '';
            break;
        case POST_CHANGE:
            state.postText = action.text;
            break;
    }
    
    return state;
}

export const addPostActionCreator = () =>
    ({type: ADD_POST});
    
export const postChangeActionCreator = txt =>
    ({type: POST_CHANGE, text: txt});

export default postReducer;
