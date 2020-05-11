import React, { Fragment, useState } from "react";

const Lista = () => {
    const [arrayNumeros, arraySetNumeros] = useState([0, 1, 2, 3]);
    const [numero, setNumero] = useState(4)

	const agregarElemento = () => {
        setNumero(numero + 1)
        
        arraySetNumeros([
            ...arrayNumeros,
            numero
        ])
    };
	return (
		<Fragment>
			<button onClick={agregarElemento}>Agregar elemento</button>
			<ul>{arrayNumeros.map((item, index) => 
                <li key={index}>{item} - Key: {index}</li>
            )}</ul>
		</Fragment>
	);
};

export default Lista;
