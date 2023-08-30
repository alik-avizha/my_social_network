import {chatAPI, ChatMessageApiType, StatusType} from "components/chat/api/chat-api";
import {AppThunk} from "app/model/redux-store";
import {Dispatch} from "redux";
import {v1} from "uuid";

export type ChatActionsType = ReturnType<typeof messagesReceivedActionCreator> | ReturnType<typeof statusChangedActionCreator>
export type InitialStateType = typeof initialState

type ChatMessageType = ChatMessageApiType & {id: string}

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

export const chatReducer = (state: InitialStateType = initialState, action: ChatActionsType): InitialStateType => {
    switch (action.type) {
        case "CHAT-PAGE/MESSAGES-RECEIVED":
            return {...state, messages: [...state.messages, ...action.payload.map(m => ({...m, id: v1()}))].filter((m, index, array) => index >= array.length - 100)}
        case "CHAT-PAGE/STATUS-CHANGED":
            return {...state, status: action.payload}
        default:
            return state
    }
}
//ActionCreators
export const messagesReceivedActionCreator = (messages: ChatMessageApiType[]) => ({
    type: 'CHAT-PAGE/MESSAGES-RECEIVED',
    payload: messages
}) as const
export const statusChangedActionCreator = (status: StatusType) => ({
    type: 'CHAT-PAGE/STATUS-CHANGED',
    payload: status
}) as const

//ThunkCreators
let _newMessageHandler: ((messages: ChatMessageApiType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceivedActionCreator(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(statusChangedActionCreator(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListeningThunkCreator = (): AppThunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('message-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
export const stopMessagesListeningThunkCreator = (): AppThunk => async (dispatch) => {
    chatAPI.unsubscribe('message-received',newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessageThunkCreator = (message: string): AppThunk => async () => {
    chatAPI.sendMessage(message)
}

