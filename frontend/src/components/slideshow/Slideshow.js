import "./Slideshow.css";

function Slideshow(props) {
  return (
    <div className="slideshow-container" style={props.SlideshowImageStyle}>
      <div className="slideshow-text">
        <h1>Brand Name</h1>
        <span></span>
        <p>Call to action statement now!</p>
        <button className="slideshow-btn">Learn More</button>
      </div>
    </div>
  );
}

export default Slideshow;
