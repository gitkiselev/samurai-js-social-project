//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi it is 3 message'},
        {id: 2, message: 'Hi it is 2 message'},
        {id: 3, message: 'Hi it is 1 message'}
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrei'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    
    switch(action.type) {
        
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {
        //         ...state,
        //         newMessageBody: action.body
                
        //     };//изменение каждой буквы при наборе
            
        case SEND_MESSAGE:
            let body = action.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
            
        default:
            return state;
    }
    
    
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

// export const updateNewMessageBodyCreator = (body) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_BODY,
//         body: body
//     }
// }

export default dialogsReducer;