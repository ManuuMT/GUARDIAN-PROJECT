import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Header from "../component/Header/Header.jsx"
import Main from "../component/Main/Main.jsx"
import Footer from "../component/Footer/Footer.jsx";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Header/>
			<Main/>
  		<Footer/>
	  </>
	);
};

export default Home;
