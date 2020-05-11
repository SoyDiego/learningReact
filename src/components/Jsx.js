import React from "react";

const Jsx = () => {
    const temperatura = 24;
	return (
		<>
			<h2>¿Frío o Calor?</h2>
            {
                temperatura > 20 ? 'Calor' : ' Frio'
            }
		</>
	);
};

export default Jsx;
