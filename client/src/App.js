import React from 'react';
import Nav from "./Nav";
// import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
// import About from "./About";
import Camping from "./Camping";
import Cycling from "./Cycling";
import Fishing from "./Fishing";
import Skiing from "./Skiing";
import PostPage from "./PostPage"
import Details from './Details';


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route path='/about' component={About}/> */}
        <Route path='/camping' component={Camping}/>
        <Route path='/skiing' component={Skiing}/>
        <Route path='/fishing' component={Fishing}/>
        <Route path='/cycling' component={Cycling}/>
        <Route path='/post' component={PostPage}/>
        <Route path='/details/:_id' exact component={Details} />
      </Switch>
    </div>
  );
}

export default App;
