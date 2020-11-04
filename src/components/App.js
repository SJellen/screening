import '../style/App.css';
import Header from '../components/Header'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import TopRated from './TopRated'

function App() {
  return (
    <div className="App">
      <Header />
      <Trending />
      <Popular />
      <TopRated />

      
    </div>
  );
}

export default App;
