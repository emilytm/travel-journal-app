import './App.css';
import travelData from './travelData';
import Trip from './Trip';
import Header from './Header';
function App() {

  const travelBlocks = travelData.map(trip => {
    return <Trip {...trip}/>
  })
  return (
    <div className="App">
      <Header />
      {travelBlocks}
    </div>
  );
}

export default App;
