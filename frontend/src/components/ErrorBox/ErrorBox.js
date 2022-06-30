import errorBoxStyling from './ErrorBox.module.css';
import { FaRegFrownOpen } from 'react-icons/fa';

function ErrorBox(props) {
  return (
    <div className={errorBoxStyling.errorBoxContainer}>
      {'Sorry, product not found  '}
      <FaRegFrownOpen />
    </div>
  );
}

export default ErrorBox;
