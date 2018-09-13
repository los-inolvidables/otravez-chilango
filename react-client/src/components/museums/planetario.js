import React from 'react';

const Planetario=()=>{
  return(
    <div>
    <br/>
    <br/>
    <br/>
    <h2>The planetarium</h2>
    <div className= 'route'>
    <center>
    <iframe className= "videos"  width="560" height="315" src="https://www.youtube.com/embed/xXI14CR49SE?autoplay=1&controls=0&&showinfo=0" frameBorder="0"
     allowFullScreen></iframe></center>
    <br/>
    <br/>
    <br/>

    <p>Planetario Luis Enrique Erro is a planetarium located in Mexico City, owned and
    operated by the National Polytechnic Institute. It was the first planetarium in
    Mexico open to the public and is one of the oldest in Latin America.</p>
    <p>Address: Av. Wilfrido Massieu s/n, Nueva Industrial Vallejo,</p>
    <p>07738 Ciudad de México, CDMX</p>
    <p>Hours:</p>
     <ul>Saturday	10AM–5PM</ul>
     <ul>Sunday	10AM–5PM</ul>
     <ul>Monday	Closed</ul>
     <ul>Tuesday	10AM–5PM</ul>
      <ul>Wednesday	10AM–5PM</ul>
     <ul>Thursday	10AM–5PM</ul>
     <ul>Friday	10AM–5PM</ul>

    </div>
    </div>
  );
};

export default Planetario;
