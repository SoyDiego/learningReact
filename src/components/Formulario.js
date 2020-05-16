import React, { Fragment, useState } from "react";

const Formulario = () => {
	const [datos, setDatos] = useState({
		nombre: "",
		apellido: "",
	});

	const handleInputChange = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
    };
    
    const enviarDatos = (e) =>{
        e.preventDefault()
        document.getElementById('agregar').innerText = `Nombre: ${datos.nombre} - Apellido: ${datos.apellido}`;
    }

	return (
		<Fragment>
			<h2>Formulario</h2>
			<form onSubmit={enviarDatos} className="d-flex justify-content-center mt-3">
				<div className="col-md-3">
					<input
						className="form-control"
						placeholder="Ingrese Nombre"
						type="text"
						name="nombre"
						onChange={handleInputChange}
					/>
				</div>
				<div className="col-md-3">
					<input
						className="form-control"
						placeholder="Ingrese Apellido"
						type="text"
						name="apellido"
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<button className="btn btn-primary" type="submit">
						Agregar
					</button>
				</div>
			</form>
            <h3 id="agregar" className="mt-4">Acá aparecerán los datos...</h3>
		</Fragment>
	);
};

export default Formulario;
