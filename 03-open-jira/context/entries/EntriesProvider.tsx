import { FC, useReducer, PropsWithChildren } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
     entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
     entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Exercitation nulla culpa tempor dolore amet dolore tempor minim tempor adipisicing enim cillum.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso: Aute do nisi pariatur laborum dolor labore velit mollit id.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminada: Cillum sit aliquip fugiat do excepteur dolor aliqua et dolore mollit adipisicing do in aliquip.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
     ]
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
     const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

     const addNewEntry = (description: string) => {
          const newEntry: Entry = {
               _id: uuidv4(),
               description,
               createdAt: Date.now(),
               status: 'pending'
          }
          
          dispatch({type: '[Entry] Add-Entry', payload: newEntry})
     }

     const updateEntry = ( entry:Entry ) => {
          dispatch({ type: '[Entry] Update-Entry', payload: entry })
     }

     return (
     <EntriesContext.Provider
          value={{
            ...state,
            // Methods
            addNewEntry,
            updateEntry
     }}
     >
     {children}
     </EntriesContext.Provider>
     );
};

