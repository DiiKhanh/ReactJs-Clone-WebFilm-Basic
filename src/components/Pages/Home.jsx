import { useSelector } from "react-redux";
import Contents from "../Contents/Contents";
import Intro from "../Intro/Intro";
import Menus from "../Menus/Menus";
import MoviesDetail from "../MoviesDetail/MoviesDetail";

function Home() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);

  return (
    <div>
      <Intro />
      <Contents />
      <Menus />
      <MoviesDetail
        movie={MovieDetail}
        showModal={MovieDetail ? true : false}
      />
    </div>
  );
}

export default Home;
