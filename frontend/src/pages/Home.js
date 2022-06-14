import { NavLink } from "react-router-dom";
import Slideshow from "../components/slideshow/Slideshow";
import FeaturedItems from "../components/featuredItems/FeaturedItems";

import fashion1 from "../images/fashion-1.jpg";
import fashion2 from "../images/fashion-2.jpg";
import fashion3 from "../images/fashion-3.jpg";

function Home() {
  const SlideshowImageStyle2 = {
    background: `url(${fashion2})`,
    backgroundPosition: `30% 0%`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
  };

  return (
    <div>
      <Slideshow SlideshowImageStyle={SlideshowImageStyle2} />
      <FeaturedItems mainTitle="Featured Items" />
      <FeaturedItems mainTitle="Trending" />
    </div>
  );
}

export default Home;
