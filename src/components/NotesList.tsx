import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';

interface INotesListProps {

    notes:Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({notes,setNotes}) => {


  const handleDelete =(id:string)=>{
          
          setNotes(notes.filter(note =>note.id !== id))
  }


    const renderNotes = ():JSX.Element[]=>{

       return notes.map((note)=>{
 
           return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
             
         })
    }
  return (

        <div className='mt-5'>
            <h2>Notes</h2>
            {renderNotes()}
        </div>
  );
};

export default NotesList;
