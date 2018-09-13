import React from 'react';
import {Link} from 'react-router-dom';

 const Bar = () => (
   <div>
  <div className="navbar">
  <Link to="/"><img src="https://i.imgur.com/hsL9aAw.png?1"/></Link>
  <div className="subnav">
    <button className="subnavbtn">Museums <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <Link to="/castillo">Castillo de chapultepec</Link>
      <Link to="/cera">Museo de cera</Link>
      <Link to="/fida">Museo Frida Kahlo</Link>
      <Link to="/planetario">Planetario</Link>
      <Link to="/papalote">Papalote Museo del Niño</Link>
      <Link to="/bellas">Palacio de Bellas Artes</Link>
      <Link to="/more">Find more</Link>
    </div>
  </div>
  <div className="subnav">
    <button className="subnavbtn"> Parks<i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
    <Link to="/zocalo">Centro Historico</Link>
    <Link to="/bosque">Bosque de Chapultepec</Link>
    <Link to="/alameda">Alameda Central</Link>
    <Link to="/desierto">Desierto de los leones</Link>
    <Link to="/bicentenario">Parque Bicentenario</Link>
    </div>
  </div>
  <div className="subnav">
    <button className="subnavbtn">Close to the city<i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <Link to="/piramides">Piramides de teotihuacan</Link>
      <Link to="/tepozotlan">Tepozotlan</Link>
      <Link to="/valle">Valle de Bravo</Link>
      <Link to="/marqueza">Marqueza</Link>
      <Link to="/tula">Tula</Link>
    </div>
  </div>
  <Link to="/forum">Last minute events!</Link>
  <Link to="/more">More!</Link>
</div>
   </div>
 );
 export default Bar;
