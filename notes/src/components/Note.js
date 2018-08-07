import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import './Note.css';

const Note = props => {
    return (
      <div className="Note-Wrapper">
        {props.notes.map(note => (
          <Card>
            <CardBody key={note.id} className="card">
              <CardTitle>{`${note.title}`}</CardTitle>
              <CardSubtitle>Author: {note.author}</CardSubtitle>
              <CardSubtitle> {note.content}</CardSubtitle>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  };

export default Note;