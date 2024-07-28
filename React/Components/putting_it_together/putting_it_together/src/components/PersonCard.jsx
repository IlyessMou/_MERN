import React, { useState } from 'react';
import './PersonCard.css'

const PersonCard = (props) => {
	let {firstName, lastName, age, hairColor} = props
	const [personAge, setPersonAge] = useState(age)

	const makeYouOld = () => {
		setPersonAge(prevAge => prevAge + 1)
	}

	return (
		<div className="hooman">
			<h2>{firstName} {lastName}</h2>
			<p>Age: {personAge}</p>
			<p>Hair Color: {hairColor}</p>
			<button onClick={makeYouOld}>{firstName}'s Birthday Button</button>
		</div>
	);
}

export default PersonCard;