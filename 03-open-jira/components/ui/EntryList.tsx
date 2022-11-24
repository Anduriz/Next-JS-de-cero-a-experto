import { List, Paper } from '@mui/material';
import { FC, useContext, useMemo, DragEvent } from 'react';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {

  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, isStartDragging } = useContext( UIContext );

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [ entries ])
  
  const allowDrop = ( event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const onDropEntry = ( event:DragEvent<HTMLDivElement> ) => {
    const id = event.dataTransfer.getData('text');
    // console.log({ id });
    const entry = entries.find( e => e._id === id )!;
    entry.status = status;
    updateEntry( entry );
    isStartDragging( false );
  }

  return (
    // TODO: Aqui haremos drop
    <div
        onDrop={ onDropEntry }
        onDragOver={ allowDrop }
        className={ isDragging ? styles.dragging : ''}
    >
        <Paper sx={{
            height:'calc(100vh - 180px)', 
            '&::-webkit-scrollbar': { display: 'none' }, 
            overflow: 'scroll', 
            backgroundColor: 'transparent', 
            padding: '1px 5px' 
            }}>
            <List sx={{ opacity: isDragging ? 0.3 : 1, transition: 'all .3s' }}>
                {
                    entriesByStatus.map( entry => (
                        <EntryCard key={ entry._id } entry={ entry }/>
                    ))    
                }
            </List>
        </Paper>
    </div>
  )
}