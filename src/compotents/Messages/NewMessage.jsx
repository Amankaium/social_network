import React from 'react'

const NewMessage = () => {

    let messageRef = React.createRef()

    const addMessage = () => alert(messageRef.current.value)

    return (
        <div>
            <textarea ref={messageRef}></textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    );
}

export default NewMessage;