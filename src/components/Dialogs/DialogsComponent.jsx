import React from 'react'
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsComponent = (props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
        props.store.dispatch(updateMessageTextActionCreator(''))
        props.store.newMessageText = ''
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateMessageTextActionCreator(body))
    }
    return <Dialogs sendMessage = { onSendMessageClick }
                    changeMessage = { onNewMessageChange }
                    dialogsPage = { state }/>
};

export default DialogsComponent;