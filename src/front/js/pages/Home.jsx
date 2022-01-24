import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/Header/Navbar/Navbar.jsx";


const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	    <Navbar/>
	);
};

export default Home;
