import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Header from "../component/Header/Header.jsx"


export const Dashboard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
  			<h1 className="text-white">DASHBOARD</h1>
			<button onClick={() => actions.logout()}>Logout</button>
			{/* <Header/> */}
	  </>
	);
};
