import '../style/App.css';
import '../style/MediaQueries.css'
import Header from '../components/Header'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import TopRated from './TopRated'
import Current from './Current'
import Footer from './Footer'
import MoviePage from './MoviePage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TvPage from './TvPage';
import SearchPage from './SearchPage'
import PersonPage from './PersonPage'
import WatchList from './WatchList'
import MenuPage from './MenuPage'
import MenuLinkPage from './MenuLinkPage'
import SignIn from './SignIn/SignIn'

function Home() {
  return (
    <div>
      <Trending />
      <Popular />
      <TopRated />
      <Current />
    </div>
  )
}


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/moviePage/" component={MoviePage} />
          <Route path="/tvPage/" component={TvPage} />
          <Route path="/personPage/" component={PersonPage} />
          <Route path="/searchPage/" component={SearchPage} />
          <Route path="/watchList/" component={WatchList} />
          <Route path="/signIn/" component={SignIn} />
          <Route path="/menuPage/" component={MenuPage} />
          <MenuLinkPage />
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
