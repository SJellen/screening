import '../style/App.css';
import Header from '../components/Header'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import TopRated from './TopRated'
import Current from './Current'
import Footer from './Footer'
import ItemPage from './ItemPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Trending />
      <Popular />
      <TopRated />
      <Current />
      <ItemPage />
      <Footer />
      
    </div>
  );
}

export default App;
