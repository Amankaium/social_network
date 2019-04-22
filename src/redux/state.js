import postReducer from "./postReducer";
import messageReducer from "./messageReducer";

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

    dispatch(action) {
        
        this._state.posts = postReducer(
            this._state.posts, action);

        this._state.messages = messageReducer(
            this._state.messages, action);

        this._callSubscriber();
    }

};

export default store;
window.store = store;


