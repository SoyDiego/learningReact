import React from "react";
import Counter from "./components/Counter";
import Jsx from "./components/Jsx";
import Lista from "./components/Lista"
import Formulario from "./components/Formulario"
import Formulario2 from "./components/Formulario2"
import Saludo from "./components/Saludo"
import Comentario from "./components/Comentario"

function App() {

	const usuario = {
		nombre: 'Diego',
		urlImagen: 'http://via.placeholder.com/64',
		comentario: 'Esto es un comentario de prueba aprendiendo PROPS...'
	}

	return (
		<>
			<Counter />
			<hr />
			<Jsx />
			<hr />
			<Lista />
			<hr />
			<Formulario />
			<hr />
			<Formulario2 />
			<hr />
			<Saludo persona="Juanito" />
			<Saludo persona="Ignacio" />
			<hr />
			<Comentario usuario={usuario} />
			<hr />
		</>
	);
}

export default App;
