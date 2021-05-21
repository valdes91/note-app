import React from 'react';
import './Notes.css';
import Note from '../Note/Note';

export default function Notes({ handleAdd, handleDelete, notes, saveText }) {
	return (
		<div id="notes" className="d-flex flex-column h-100">
			<h2 id="category-name" className="mb-2">
				Add Note
			</h2>
			<i className="fas fa-plus-circle fa-2x add" onClick={handleAdd}></i>
			{notes.map((note, index) => {
				return (
					<Note
						key={index}
						index={index}
						handleDelete={handleDelete}
						saveText={saveText}
						text={note}
					/>
				);
			})}
		</div>
	);
}
