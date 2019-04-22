const MESSAGE_CHANGE = "MESSAGE-CHANGE";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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

const messageReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                message: state.newMessageText    
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        case MESSAGE_CHANGE:
            state.newMessageText = action.text;
            break;        
    }

    return state;
}

export const addMessageActionCreator = () =>
    ({type: ADD_MESSAGE});
    
export const changeMessageTextActionCreator = txt =>
    ({type: MESSAGE_CHANGE, text: txt});

export default messageReducer;
