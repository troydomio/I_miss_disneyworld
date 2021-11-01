import './App.css';
import Player from './components/Player';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="nav"> 
    <p>I Miss Disney World 😢</p>
    </div>
    <div className="main_container">
      <div className="div1">
      </div>
      <div className="div2">
       
      </div>

      <div className="div3">
     <Player name="Magic Kingdom Crowd" src="https://freepngimg.com/thumb/castle/70246-kingdom-magic-beauty-cinderella-sleeping-castle-princess.png"/>
     <Player name="Grand Floridian Music" src="https://www.freepnglogos.com/uploads/piano-png/piano-photo-francomac-photobucket-1.png"/>
     <Player name="Cinderella's Castle At Night" src="https://www.pinclipart.com/picdir/big/140-1401093_cinderella-broom-cliparts-free-download-clip-art-cinderella.png"/>
     <Player name="Happily Ever After Show" src="https://lh3.googleusercontent.com/proxy/MrZ2TNsP-BSMaG3Xk0Tugme7pvKxRo83_VmyKIe8hOyP78AqU3I2cs2p6gHaSNVhODxaqgWeTlJHrIptFQLfc-FbwyEkeC8"/>
     <Player name="Epcot Music" src="https://static.thenounproject.com/png/63078-200.png"/>
      </div>

      
    </div>
    <Footer/>
    </>
  );
}

export default App;
