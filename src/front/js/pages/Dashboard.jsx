import React, { useContext } from "react";
import { Context } from "../store/appContext";

import NavBar from "../component/Header/Navbar/Navbar.jsx";
import HeaderProfile from "../component/HeaderProfile/HeaderProfile.jsx";
import BodyProfile from "../component/BodyProfile/BodyProfile.jsx";


export const Dashboard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
     <NavBar/>
     <HeaderProfile/>
		 <BodyProfile/>
  			
      <h1 className="text-white">DASHBOARD</h1>
			{/*<button onClick={() => actions.logout()}>Logout</button>*/}

  		<h1 className="text-white">DASHBOARD</h1>
			<button onClick={() => actions.logout()}>Logout</button>

			{/* <Header/> */}
	  </>
	);
};
