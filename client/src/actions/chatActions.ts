// import { Dispatch } from "redux";
import { actionTypes, SetChosenChatDetails, SetMessages, Message, SetTyping, AddNewMessage, SetInitialTypingStatus, Typing } from "./types";

export const setChosenChatDetails = (chatDetails: {
    userId: string;
    username: string;
}): SetChosenChatDetails => {
    return {
        type: actionTypes.setChosenChatDetails,
        payload: chatDetails,
    };
};


export const setMessages = (messages: Array<Message>): SetMessages => {
    return {
        type: actionTypes.setMessages,
        payload: messages,
    };
};

export const addNewMessage = (message: Message): AddNewMessage => {
    return {
        type: actionTypes.addNewMessage,
        payload: message,
    };
};


export const setTyping = (typing: Typing): SetTyping => {
    return {
        type: actionTypes.setTyping,
        payload: typing
    };
};

export const setInitialTypingStatus = (typing: Array<Typing>): SetInitialTypingStatus => {
    return {
        type: actionTypes.setInitialTypingStatus,
        payload: typing,
    };
};