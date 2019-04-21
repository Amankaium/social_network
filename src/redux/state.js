let rerenderEntireTree = () => {}

let state = {
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
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        rating: 0
    };
    state.posts.posts.push(newPost);
    state.posts.postText = '';
    rerenderEntireTree();
}

export const postChange = (text) => {
    state.posts.postText = text;
    rerenderEntireTree();

}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;


