import {chatAPI, ChatMessageType} from "components/chat/api/chat-api";
import {AppThunk} from "app/model/redux-store";
import {Dispatch} from "redux";

export type ChatActionsType = ReturnType<typeof messagesReceivedActionCreator>
export type InitialStateType = typeof initialState

let initialState = {
    messages: [] as ChatMessageType[]
}

export const chatReducer = (state: InitialStateType = initialState, action: ChatActionsType): InitialStateType => {
    switch (action.type) {
        case "CHAT-PAGE/MESSAGES-RECEIVED":
            return {...state, messages: [...state.messages, ...action.payload]}
        default:
            return state
    }
}
//ActionCreators
export const messagesReceivedActionCreator = (messages: ChatMessageType[]) => ({
    type: 'CHAT-PAGE/MESSAGES-RECEIVED',
    payload: messages
}) as const

//ThunkCreators
let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceivedActionCreator(messages))
        }
    }
    return _newMessageHandler
}

export const startMessagesListeningThunkCreator = (): AppThunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListeningThunkCreator = (): AppThunk => async (dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessageThunkCreator = (message: string): AppThunk => async () => {
    chatAPI.sendMessage(message)
}

