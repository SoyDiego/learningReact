import React from "react";
import { useState, useEffect } from "react";

const Api = () => {
	const [tecnologias, setTecnologias] = useState([]);
	const [users, setUsers] = useState([]);

	const obtenerDatos = async () => {
		const datos = await fetch("https://jsonplaceholder.typicode.com/users");
		const json = await datos.json();
		setUsers(json);
	};

	useEffect(() => {
		const datos = [
			{ id: 1, nombre: "ReactJs" },
			{ id: 2, nombre: "VueJs" },
			{ id: 3, nombre: "Angular" },
		];
		setTecnologias(datos);
		obtenerDatos();
	}, []);

	return (
		<div>
			<h2>API</h2>
			<h3>Datos Estáticos</h3>
			<ul>
				{tecnologias.length > 0 ? (
					tecnologias.map((item) => <li key={item.id}>{item.nombre}</li>)
				) : (
					<li>No users</li>
				)}
			</ul>
			<h3>Datos Dinámicos</h3>
			<ul>
				{users.length > 0 ? (
					users.map((user) => (
						<li key={user.id}>
							{user.id} - {user.name} - {user.username}
						</li>
					))
				) : (
					<li>No users</li>
				)}
			</ul>
		</div>
	);
};

export default Api;
