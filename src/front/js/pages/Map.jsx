import React from "react";

import Navbar from "../component/Header/Navbar/Navbar.jsx"
import TestMap from "../component/Header/Intro/Maps/TestMap.jsx";

export const Map = () => {
    let fullMap = {height: "70vh", width: "100%"};

	return (
		<>
			<Navbar/>
			<TestMap style={fullMap} isFullMap={true}/>
        </>
	);
};