import slideshowStyles from './Slideshow.module.css';

function Slideshow(props) {
  return (
    <div
      className={slideshowStyles.slideshowContainer}
      // style={{
      //   backgroundImage:
      //     "url('https://github.com/lunovello/ecommerce-site-project/blob/master/frontend/public/images/fashion-2.jpg')",
      // }}
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
