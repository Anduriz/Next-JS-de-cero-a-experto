import { FC, useReducer, PropsWithChildren } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
     sidemenuOpen: boolean;
     isAddingEntry: boolean;
     isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
     sidemenuOpen: false,
     isAddingEntry: false,
     isDragging: false
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
     const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

     const openSideMenu = () => {
          dispatch({type:'UI - Open Sidebar'})
     }

     const closeSideMenu = () => {
          dispatch({type: 'UI - Close Sidebar'})
     }

     const setIsAddingEntry = ( isAdding: boolean ) => {
          dispatch({type: 'UI - SetIsAdding Entry', payload: isAdding})
     }

     const isStartDragging = ( isDragging: boolean ) => {
          dispatch({type: 'UI - Start Dragging', payload: isDragging})
     }

     return (
     <UIContext.Provider value={{
          ...state,
          //Methods
          openSideMenu,
          closeSideMenu,
          setIsAddingEntry,
          isStartDragging
     }}
     >
     {children}
     </UIContext.Provider>
     );
};