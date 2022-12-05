import './App.css';
import { planets } from './Planets'

function App() {
  return (
    <div>
      {planets.map((planet, key)=> planet.isGasPlanet? <PlanetCart key={key} name={planet.name} /> :''
      // {return planet.isGasPlanet? <PlanetCart key={key} name={planet.name} /> :''} 
        )}
    </div>
  );
}

const PlanetCart = (prop) => {
  return (
    <div>
      <h2>{prop.name}</h2>
    </div>
  )
}

export default App;
