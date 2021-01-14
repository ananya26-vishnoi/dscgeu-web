import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing Components
import Footer from "./components/Footer";
import Header from "./components/Header";

//Importing Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import Join from "./pages/Join";
import BadgeCollection from "./pages/BadgeCollection";
import RedirectLinks from "./pages/RedirectLinks";
import PrivateRoute from "./components/PrivateRoute";
import BadgeLogin from "./pages/BadgeAdmin/BadgeLogin";
import BadgeAdmin from "./pages/BadgeAdmin/BadgeAdmin";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/join" exact component={Join} />
					<Route path="/team" exact component={Team} />
					<Route path="/event" exact component={RedirectLinks} />
					<Route path="/badge" exact component={BadgeCollection} />
					<Route path="/badgelogin" exact component={BadgeLogin} />
					<PrivateRoute
						path="/badgeadmin"
						exact
						component={BadgeAdmin}
					/>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
