import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Main from "../component/Main/Main.jsx"

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<>

			<Main/>

	    </>
	);
};
