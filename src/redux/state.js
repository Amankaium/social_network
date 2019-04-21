const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';
const MESSAGE_CHANGE = "MESSAGE-CHANGE";
const ADD_MESSAGE = "ADD-MESSAGE";


let store = {

    _state: {
        posts: {
            posts: [
                {id: 1, message: 'text of post one', rating: -3},
                {id: 2, message: 'cat and dog are pets duh', rating: 21},
                {id: 3, message: '10 hours coding challenge', rating: 147}
            ],    
            postText: '',
        },    
        
        messages: {
            dialogs: [
                {id: 1, name: 'Oleg'},
                {id: 2, name: 'Vasya'},
                {id: 3, name: 'Petya'}
            ],
            
            messages: [
                {id: 1, message: 'Nado prokopat orogod'},
                {id: 2, message: 'Ne potuplia sloi razum. Do not do it for anyone.'},
                {id: 3, message: 'U\'d practice more '}
            ],
            newMessageText: ''
        }    
    },

    _callSubscriber() {
        console.log('no subscriber');
    },

    getState() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: action.postMessage,
                rating: 0
            };
            this._state.posts.posts.push(newPost);
            this._state.posts.postText = '';            
        } else if (action.type === POST_CHANGE) {
            this._state.posts.postText = action.text;    
        } else if (action.type === MESSAGE_CHANGE) {
            this._state.messages.newMessageText = action.text;
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: action.text    
            }

            this._state.messages.messages.push(newMessage);
            this._state.messages.newMessageText = '';
        }
        this._callSubscriber();
    }

};

export const addPostActionCreator = txt =>
    ({type: ADD_POST, postMessage: txt});
export const postChangeActionCreator = txt =>
    ({type: POST_CHANGE, text: txt});
export const changeMessageTextActionCreator = txt =>
    ({type: MESSAGE_CHANGE, text: txt});
export const addMessageActionCreator = txt =>
    ({type: ADD_MESSAGE, text: txt});

export default store;
window.store = store;


