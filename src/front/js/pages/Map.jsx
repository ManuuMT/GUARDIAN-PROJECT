import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Header from "../component/Header/Header.jsx"

export const Map = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Header/>
	   </>
	);
};