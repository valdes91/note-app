import React from 'react';
import './Note.css';

import Card from 'react-bootstrap/Card';

export default function Note({ index, handleDelete, saveText, text }) {
	const deleteNote = () => {
		handleDelete(index);
	};

	const handleSave = (e) => {
		const note = e.target.innerText;
		saveText(note, index);
	};

	return (
		<Card className="note-card">
			<Card.Header id="card-head" className="bg-secondary text-light d-flex">
				Created on: {new Date().toDateString()}
				<i className="fas fa-trash fa-lg ml-auto delete" onClick={deleteNote}></i>
			</Card.Header>
			<div
				className="note-body"
				contentEditable="true"
				onBlur={handleSave}
				dangerouslySetInnerHTML={{ __html: text }}
			></div>
		</Card>
	);
}
