import { Card, CardActionArea, CardActions, CardContent } from '@mui/material'
import { DragEvent, FC, useContext } from 'react';
import Typography from '@mui/material/Typography';
import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui/UIContext';

interface Props {
    entry: Entry;
}

export const EntryCard:FC<Props> = ({ entry }) => {

  const {isStartDragging} = useContext(UIContext)

  const onDragStart = ( event:DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id);
    isStartDragging(true);
  }

  const onDragEnd = () => {
    isStartDragging(false);
  }

  return (
    <Card sx={{ marginBottom: 1 }}
    // Eventos de drag
    draggable
    onDragStart={ onDragStart }
    onDragEnd={ onDragEnd }
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant='body2'>Hace 10 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
