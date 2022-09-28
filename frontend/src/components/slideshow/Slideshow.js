import LoadingBox from '../LoadingBox/LoadingBox';
import slideshowStyles from './Slideshow.module.css';

function Slideshow(props) {
  return props.loading ? (
    <LoadingBox />
  ) : (
    <div
      className={slideshowStyles.slideshowContainer}
      style={{
        background: `50% 0% / cover no-repeat url(${props.slide.image})`,
        // background: `radial-gradient(rgba(0,0,0,0.1) ,rgba(0,0,0,0.8)) , 70% / cover no-repeat url(${props.slide.image})`,
        // background: `50% 50% / cover no-repeat url('/images/wassily-kandinsky-title.jpg')`,
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
