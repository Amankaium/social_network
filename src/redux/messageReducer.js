const MESSAGE_CHANGE = "MESSAGE-CHANGE";
const ADD_MESSAGE = "ADD-MESSAGE";

const messageReducer = (state, action) => {

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
