import '../style/App.css';
import Header from '../components/Header'
import Trending from '../components/Trending'
import Popular from '../components/Popular'

function App() {
  return (
    <div className="App">
      <Header />
      <Trending />
      <Popular />

      
    </div>
  );
}

export default App;
