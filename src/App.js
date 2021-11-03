import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import AllMyProjects from "./pages/AllMyProjects";
import Clones from "./pages/Clones";
import Personal from "./pages/Personal";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
            </Switch>
            <Switch>
                <Route path="/services">
                    <Services />
                </Route>
            </Switch>
            <Switch>
                <Route path="/all-my-projects">
                    <AllMyProjects />
                </Route>
            </Switch>
            <Switch>
                <Route path="/my-clones">
                    <Clones />
                </Route>
            </Switch>
            <Switch>
                <Route path="/my-personal-projects">
                    <Personal />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
