import Slideshow from '../../components/Slideshow/Slideshow';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

function Home(props) {
  return props.loading ? (
    <LoadingBox />
  ) : props.error ? (
    <ErrorBox error={props.error} />
  ) : (
    <Fragment>
      <Helmet>
        <title>
          {props.headerTitle
            ? props.headerTitle
            : 'Luca Novello | Ecommerce Website'}
        </title>
      </Helmet>
      <Slideshow data={props.data.slideshow} />
      <FeaturedItems mainTitle="Related Items" />
    </Fragment>
  );
}

export default Home;
