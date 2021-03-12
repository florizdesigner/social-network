import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogs= [
        { id: 1, name: 'Dmitriy' },
        { id: 2, name: 'Elena' },
        { id: 3, name: 'Jacob' },
        { id: 4, name: 'Alexa' },
        { id: 5, name: 'Fedor' },
        { id: 6, name: 'Albert' },
    ];

    let messages = [
        { message: 'Hello!' },
        { message: 'Hello world!' },
        { message: 'Hello! How are you?' }
    ];

    let dialogsElements = dialogs.map (dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    let messageElements = messages.map (text => <Message message={text.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;