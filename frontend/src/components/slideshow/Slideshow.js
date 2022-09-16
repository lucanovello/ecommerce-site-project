import LoadingBox from '../LoadingBox/LoadingBox';
import slideshowStyles from './Slideshow.module.css';
import data from '../../data';

function Slideshow(props) {
  return props.loading ? (
    <LoadingBox />
  ) : (
    <div
      className={slideshowStyles.slideshowContainer}
      style={{
        backgroundImage: `url(${data.slideshow[1].image})`,
      }}
    >
      <div className={slideshowStyles.slideshowText}>
        <h1>Brand Name</h1>
        <span></span>
        <p>Call to action statement now!</p>
        <button className={slideshowStyles.slideshowBtn}>Learn More</button>
      </div>
    </div>
  );
}

export default Slideshow;
