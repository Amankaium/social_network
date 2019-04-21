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
            ]
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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 4,
                message: action.postMessage,
                rating: 0
            };
            this._state.posts.posts.push(newPost);
            this._state.posts.postText = '';
            this._callSubscriber();
        } else if (action.type === "POST-CHANGE") {
            this._state.posts.postText = action.text;
            this._callSubscriber();    
        }
    }

};


export default store;
window.store = store;


