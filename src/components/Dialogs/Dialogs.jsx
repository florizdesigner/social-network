import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
/*import messages from './../../App'
import dialogs from './../../App'*/

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map (dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />);
    let messageElements = props.state.messages.map (text => <Message message={text.message} />);

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <textarea ref={newMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;