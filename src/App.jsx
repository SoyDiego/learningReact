import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";

//Components
import Counter from "./components/Counter";
import Jsx from "./components/Jsx";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import Formulario2 from "./components/Formulario2";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";
import Api from "./components/Api";
function App() {
	const usuario = {
		nombre: "Diego",
		urlImagen: "http://via.placeholder.com/64",
		comentario: "Esto es un comentario de prueba aprendiendo PROPS...",
	};

	return (
		<Router>
			<div className="btn-group m-5">
				<NavLink exact to="/" className="btn btn-dark">
					Inicio
				</NavLink>
				<NavLink exact to="/Forms" className="btn btn-dark">
					Forms
				</NavLink>
				<NavLink exact to="/all" className="btn btn-dark">
					Otros
				</NavLink>
			</div>
			<Route exact path="/">
				<Counter />
				<hr />
				<Jsx />
				<hr />
				<Lista />
				<hr />
			</Route>
			<Switch>
				<Route path="/Forms">
					<Formulario />
					<hr />
					<Formulario2 />
					<hr />
				</Route>
			</Switch>
			<Route path="/all">
				<Saludo persona="Juanito" />
				<Saludo persona="Ignacio" />
				<hr />
				<Comentario usuario={usuario} />
				<hr />
				<Api />
			</Route>
		</Router>
	);
}

export default App;
