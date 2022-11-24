import { UIState } from './';

type UIActionType = 
| { type: 'UI - Open Sidebar' }
| { type: 'UI - Close Sidebar' }
| { type: 'UI - SetIsAdding Entry', payload: boolean }
| { type: 'UI - Start Dragging', payload: boolean }

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
    switch (action.type){
        case 'UI - Open Sidebar': 
    return{
        ...state,
        sidemenuOpen: true
    }

    case 'UI - Close Sidebar':
    return{
        ...state,
        sidemenuOpen: false
    }

    case 'UI - SetIsAdding Entry':
    return{
        ...state,
        isAddingEntry: action.payload
    }

    case 'UI - Start Dragging':
    return{
        ...state,
        isDragging: action.payload
    }

    default:
        return state;
    }
}