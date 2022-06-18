import Slideshow from '../../components/slideshow/Slideshow';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import data from '../../data';

function Home() {
  return (
    <div>
      <Slideshow SlideshowImageStyle={data.slideshow} />
      <FeaturedItems mainTitle="Featured Items" />
    </div>
  );
}

export default Home;
