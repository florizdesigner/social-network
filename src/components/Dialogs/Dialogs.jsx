import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map (dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />);
    let messageElements = state.messages.map (text => <Message message={text.message} />);
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.changeMessage(body)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div> {messageElements} </div>
                <div>
                    <textarea placeholder='Enter your message'
                              onChange={onNewMessageChange}
                              value={newMessageBody}></textarea>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;