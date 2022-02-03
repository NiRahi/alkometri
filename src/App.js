import {useState} from 'react';
import './App.css';


function App() {

const [paino, setPaino] = useState(0);
const [olut, setOlut] = useState(0);
const [aika, setAika] = useState(0);
const [promillet, setPromillet] = useState(0);
const [spuoli, setSpuoli] = useState();

if (promillet < "0") {
  setPromillet(0);
}

let litrat = olut * 0.33;
let grammat = litrat * 8 * 4.5;
let poltto = paino / 10;
let gramJaljella = grammat - (poltto*aika);
const laske = () => {
  setPromillet(gramJaljella / (paino*spuoli)).toFixed(1);
}

  return (
    <div class="container-fluid">
    <h3>Promillelaskuri</h3>
    <div class="inputs">
 <div class="paino">
   <label>Paino(kg) </label>
   <input type="text"
    step="1"
    value={paino}
    onChange={e => setPaino(e.target.value)}
     />
 </div>
 <div>
   <label>Olutta juotu (0.33l) </label>
   <input type="number"
    step="1"
    value={olut}
    onChange={e => setOlut(e.target.value)}
     />
 </div>
 <div>
   <label>Aikaa juomisen aloittamisesta(tunnit) </label>
   <input type="number"
    step="1"
    value={aika}
    onChange={e => setAika(e.target.value)}
     />
 </div>
 </div>
 <div>
   
   <input type="radio"
   value="0.7"
   name="gender"
   onChange={e => setSpuoli(e.target.value)} />
   <label>Mies</label>
   <br></br>
   <input type="radio" 
    value="0.6"
    name="gender" 
    onChange={e => setSpuoli(e.target.value)}
    />
   <label> Nainen</label>
 </div>
 <div>
   <output>{promillet.toFixed(2)} ‰</output>
 </div>
 <button onClick={laske}>Laske</button>
   </div>
  );
}

export default App;
