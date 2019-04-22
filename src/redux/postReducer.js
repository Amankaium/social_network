const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';

const postReducer = (state, action) => {

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
