
import './App.css';
import './style.css'
import React from 'react';
import reactapp from './reactapp.png'





function App() {
  return (
    <div className="container">

     <div style={{border:"solid 1px black",maxWidth:"100vw"}}/>

 <h1 className="title red">Amal Ben Henia </h1>

 <br />

 <img src={reactapp} width="250" alt="react"/>

 <br />

 <img src="/reactimage.png" alt="software development" width="250" />

 <br />

<iframe title="react video" width="560" height="315" src="https://www.youtube.com/embed/VWadE7PMF0c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    </div>
  );
}

export default App;
