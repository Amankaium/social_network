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

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('no subscriber');
    },

    addPost(postMessage) {
        let newPost = {
            id: 4,
            message: postMessage,
            rating: 0
        };
        this._state.posts.posts.push(newPost);
        this._state.posts.postText = '';
        this._callSubscriber();
    },

    postChange(text) {
        this._state.posts.postText = text;
        this._callSubscriber();
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

};


export default store;
window.store = store;


