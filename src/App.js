import myPhoto from "./fleur.jpg";
import myVideo from "./video.mp4";
import './App.css';

function App() {
  return (
    <div classeName="test" >

      <h1 className="title">Your name here</h1>

      <br />
       <div className="my-images">
      <img src={myPhoto} className="fleur" alt='fleur'  />
      <br />
      <img src="/feuille.jpg" classeName="feuille" alt='feuille' />
      </div>
      <br/>
      <video>
        <source src ={myVideo} classeName="video" alt="video/mp4" />
      </video>
      </div>
  );
}
export default App 
