import React from 'react'

const NewMessage = () => {

    let messageRef = React.createRef()
    //
    let man = {
        name: "John",
        age: 25,
        say_smth() {
            console.log(`My name is ${this.name}`)
        }
    } 
    //
    let page = {
        title: 'my first js site',
        _content: "",
        
        setContent(content) {
            this._content = content;
        },
        
        getContent() {
            return this._content;
        },

        render: function() {
            document.write(this.content);
        } 
    };

    const addMessage = () => {
        // page._content = 'Some text or HTML-code'; // WRONG 
        page.setContent('Some text or HTML-code');
        // console.log(page._content); // WRONG
        console.log(page.getContent());
    };

    return (
        <div>
            <textarea ref={messageRef}></textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    );
}

export default NewMessage;