import React from "react";

import Navbar from "../component/Header/Navbar/Navbar.jsx"
import TestMap from "../component/Header/Intro/Maps/TestMap.jsx";
import MapForm from "../component/Header/Intro/MapForm/MapForm.jsx";

export const Map = () => {
	return (
		<>
			<Navbar/>
			<TestMap/>
            <MapForm/>
        </>
	);
};