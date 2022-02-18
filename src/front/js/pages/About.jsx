import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Main from "../component/Main/Main.jsx"
import HeaderAbout from "../component/HeaderAbout/HeaderAbout.jsx";
import IconsAbout from "../component/IconsAbout/IconsAbout.jsx";
import InfoAbout from "../component/InfoAbout/InfoAbout.jsx";

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			 <HeaderAbout/> 
			 <IconsAbout/>
			 <InfoAbout/>
	    </>
	);
};
