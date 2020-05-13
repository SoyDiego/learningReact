import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const Formulario2 = () => {
    const { register, errors, handleSubmit } = useForm();
    
    const [Entradas, setEntradas] = useState([])

	const onSubmit = (data, e) => {
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset();
    };

	return (
		<Fragment>
			<h2>Formulario 2</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="row justify-content-center"
			>
				<div className="col-md-3">
					<input
						name="titulo"
						placeholder="Ingrese titulo"
						className="form-control"
						ref={register({
							required: { value: true, message: "Campo obligatorio" },
							minLength: { value: 2, message: "Minimo dos letras" },
						})}
					></input>
					{errors.titulo && (
						<span className="text-danger text-small d-block mb-2">
							{errors.titulo.message}
						</span>
					)}
				</div>
				<div className="col-md-3">
					<input
						name="descripcion"
						placeholder="Ingrese descripción"
						className="form-control"
						ref={register({
							required: { value: true, message: "Campo obligatorio" },
							minLength: { value: 2, message: "Minimo dos letras" },
						})}
					></input>
					{errors.descripcion && (
						<span className="text-danger text-small d-block mb-2">
							{errors.descripcion.message}
						</span>
					)}
				</div>
				<div>
					<button type="submit" name="" id="" className="btn btn-primary">
						Agregar
					</button>
				</div>
			</form>
            <ul>
                {
                    Entradas.map((entrada,index) =>
                        <li key={index}>{entrada.titulo} - {entrada.descripcion}</li>
                    )
                }
            </ul>
		</Fragment>
	);
};

export default Formulario2;
