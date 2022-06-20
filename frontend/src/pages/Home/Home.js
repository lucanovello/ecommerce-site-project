import Slideshow from '../../components/Slideshow/Slideshow';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ErrorBox from '../../components/ErrorBox/ErrorBox';

function Home(props) {
  return props.loading ? (
    <LoadingBox />
  ) : props.error ? (
    <ErrorBox error={props.error} />
  ) : (
    <div>
      <Slideshow data={props.data.slideshow} />
      <FeaturedItems
        mainTitle="Featured Items"
        products={props.data.products}
        loading={props.loading}
        error={props.error}
      />
    </div>
  );
}

export default Home;
