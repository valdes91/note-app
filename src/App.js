import Title from './components/Title/Title';
import Notes from './components/Notes/Notes';
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [notes, setNotes] = useState(['']);

	useEffect(() => {
		const storedNotes = JSON.parse(localStorage.getItem('notes'));
		if (storedNotes) {
			setNotes(storedNotes);
		}
	}, []);

	const handleAdd = () => {
		setNotes((prevNotes) => ['', ...prevNotes]);
	};

	const handleDelete = (index) => {
		const newNotes = notes.filter((note, id) => id !== index);
		localStorage.setItem('notes', JSON.stringify(newNotes));
		setNotes(newNotes);
	};

	const saveText = (text, index) => {
		const newNotes = Array.from(notes);
		newNotes[index] = text;
		localStorage.setItem('notes', JSON.stringify(newNotes));
		setNotes(newNotes);
	};

	return (
		<Container id="main-container" className="h-100 d-flex flex-column" fluid>
			<Row>
				<Col className="p-0">
					<Title title="Notes App" />
				</Col>
			</Row>
			<Row className="h-100">
				<Col className="h-100 p-0">
					<Notes
						className="h-100"
						handleAdd={handleAdd}
						handleDelete={handleDelete}
						saveText={saveText}
						notes={notes}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
