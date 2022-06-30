import Slideshow from '../../components/Slideshow/Slideshow';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import { Fragment } from 'react';

function Home(props) {
  return props.loading ? (
    <LoadingBox />
  ) : props.error ? (
    <ErrorBox error={props.error} />
  ) : (
    <Fragment>
      <Slideshow data={props.data.slideshow} />
      <FeaturedItems mainTitle="Related Items" />
    </Fragment>
  );
}

export default Home;
