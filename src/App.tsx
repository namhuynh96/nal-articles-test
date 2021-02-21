import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import DetailArticle from "./containers/DetailArticle/DetailArticle";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.App}>
      <Router>
        <Switch>
          <Route path="/article/:id">
            <DetailArticle />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
