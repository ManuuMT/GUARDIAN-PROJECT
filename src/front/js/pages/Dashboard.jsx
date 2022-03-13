import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
  			<h1 className="text-white">DASHBOARD</h1>
	  </>
	);
};
