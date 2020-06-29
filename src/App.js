import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import NewScore from "./components/scores/NewScore";


function App() {
  const allTabs = ['/', '/about', '/scores/new'];
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <>
        <AppBar position="static">
              <Tabs value={location.pathname}>
                <Tab label="Home" value="/" component={Link} to={allTabs[0]} />
                <Tab label="About" value="/about" component={Link} to={allTabs[1]} />
                <Tab
                  value="/scores/new"
                  label="New Game"
                  component={Link}
                  to={allTabs[2]}
                />
              </Tabs>
              </AppBar>
              <Switch>
                <Route path={allTabs[1]} component={AboutPage} />
                <Route path={allTabs[2]} component={NewScore} />
                <Route path={allTabs[0]} component={HomePage} />
              </Switch>
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
