import React, {useContext} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { Map } from "./pages/Map.jsx"
import { About } from "./pages/About.jsx"
import { Contact } from "./pages/Contact.jsx"
import { Dashboard } from "./pages/Dashboard.jsx"

import injectContext, {Context} from "./store/appContext";
import { Redirect } from "react-router-dom";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	const {store} = useContext(Context);
	return (
		<div>
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						{store.isLoggedIn ? <Redirect to="/Dashbord" /> : <Home />}
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

					<Route exact path="/Dashboard">
            			<Dashboard />
          			</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
