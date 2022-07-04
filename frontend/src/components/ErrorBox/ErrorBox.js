import errorBoxStyling from './ErrorBox.module.css';
import { FaRegFrownOpen } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

function ErrorBox(props) {
  return (
    <div className={errorBoxStyling.errorBoxContainer}>
      <Helmet>
        <title>{'Top Secret Area | Authorized Personnel Only!'}</title>
      </Helmet>
      {'Sorry, product not found  '}
      <FaRegFrownOpen />
    </div>
  );
}

export default ErrorBox;
