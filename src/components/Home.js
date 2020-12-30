import Trending from '../components/Trending'
import Popular from '../components/Popular'
import TopRated from './TopRated'
import Current from './Current'


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

  export default Home