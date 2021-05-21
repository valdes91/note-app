import React from 'react';
import './title.css';

export default function Title({ title = 'Notes' }) {
	return (
		<div className="title">
			<h1>{title}</h1>
		</div>
	);
}
