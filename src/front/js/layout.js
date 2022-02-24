import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { Map } from "./pages/Map.jsx"
import { About } from "./pages/About.jsx"
import { Contact } from "./pages/Contact.jsx"

//import Navbar from "./component/Header/Navbar/Navbar.jsx";
import injectContext from "./store/appContext";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
					
					<Route exact path="/Map">
						<Map/>
					</Route>

					<Route exact path="/About">
						<About/>
					</Route>

                    <Route exact path="/Contact">
						<Contact/>
					</Route>

				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
