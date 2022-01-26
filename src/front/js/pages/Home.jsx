import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Header from "../component/Header/Header.jsx"


const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	    <Header/>
	);
};

export default Home;
