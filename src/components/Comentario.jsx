import React, { Fragment } from "react";
import Avatar from "./Avatar";

const Comentario = ({ usuario }) => {
	return (
		<Fragment>
			<h2>Comentarios</h2>
			<div className="d-flex justify-content-center">
				<div className="media col-md-6 justify-content-center">
					{/* <img className="mr-3" src={usuario.urlImagen} alt="" /> */}
					<Avatar urlImagen={usuario.urlImagen} />
					<div className="media-body">
						<h5 className="mt-0">{usuario.nombre}</h5>
						{usuario.comentario}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Comentario;
