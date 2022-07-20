import { Fragment } from 'react';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import ShippingScreen from '../ShippingScreen/ShippingScreen';

function Home(props) {
  return (
    <Fragment>
      <CheckoutSteps />
      <ShippingScreen />
    </Fragment>
  );
}

export default Home;
