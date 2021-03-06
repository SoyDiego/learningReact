import React, {Fragment, useState } from "react";

const Counter = () => {
	const [numero, setNumero] = useState(0);

	const oneMore = () => {
		setNumero(numero + 1);
	};

	const oneLess= () => {
		setNumero(numero - 1);
	};

	return (
		<Fragment>
			<h1>Primeros pasos en React:</h1>
			<p>Contador: {numero}</p>
			<button className="btn btn-primary" onClick={oneMore}>One More</button>
			<button className="btn btn-warning" onClick={oneLess}>One Less</button>
		</Fragment>
	);
};

export default Counter;
