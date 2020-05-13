import React, { Fragment } from "react";

const Avatar = ({urlImagen}) => {
	return (
		<Fragment>
			<img className="mr-3" src={urlImagen} alt="" />
		</Fragment>
	);
};

export default Avatar;
