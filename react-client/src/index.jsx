import React , { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home.js";
import Bar from "./components/bar.js";
import LikeButton from './components/likeButton.js'

import Zocalo from "./components/parques/zocalo.js";
import Bosque from "./components/parques/bosque.js";
import Alameda from "./components/parques/alameda.js";
import Desierto from "./components/parques/desierto.js";
import Bicentenario from "./components/parques/bicentenario.js";

import Bellas from "./components/museums/bellas.js";
import Castillo from "./components/museums/castillo.js";
import Cera from "./components/museums/cera.js";
import Frida from "./components/museums/frida.js";
import Papalote from "./components/museums/papalote.js";
import Planetario from "./components/museums/planetario.js";
import Main from "./components/more/main.js";

import Piramides from "./components/close/piramides.js";
import Tepozotlan from "./components/close/tepozotlan.js";
import Valle from "./components/close/valle.js";
import Marqueza from "./components/close/marqueza.js";
import Tula from "./components/close/tula.js";
import Forum from "./components/forum.jsx";
//import Carousel from '/carousel.js';




class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>
        <Bar />
          <Switch>
            <Route exact path="/" component={Home}/>
          <Route path="/zocalo" component={Zocalo}/>
          <Route path="/bosque" component={Bosque}/>
          <Route path="/alameda" component={Alameda}/>
          <Route path="/desierto" component={Desierto}/>
          <Route path="/bicentenario" component={Bicentenario}/>


          <Route path="/castillo" component={Castillo}/>
          <Route path="/cera" component={Cera}/>
          <Route path="/fida" component={Frida}/>
          <Route path="/planetario" component={Planetario}/>
          <Route path="/papalote" component={Papalote}/>
          <Route path="/bellas" component={Bellas}/>


          <Route path="/piramides" component={Piramides}/>
          <Route path="/tepozotlan" component={Tepozotlan}/>
          <Route path="/valle" component={Valle}/>
          <Route path="/marqueza" component={Marqueza}/>
          <Route path="/tula" component={Tula}/>
          <Route  path="/forum" component={Forum} />
          <Route  path="/more" component={Main} />



          </Switch>
      </div>
      </BrowserRouter>

    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"))
