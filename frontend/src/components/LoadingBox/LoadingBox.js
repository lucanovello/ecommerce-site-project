import loadingBoxStyles from './LoadingBox.module.css';

function LoadingBox() {
  return (
    <div className={loadingBoxStyles.LoadingBoxContainer}>
      <div
        className={`${loadingBoxStyles.LoadingBox} ${loadingBoxStyles.LoadingBox1}`}
      ></div>
      <div
        className={`${loadingBoxStyles.LoadingBox} ${loadingBoxStyles.LoadingBox2}`}
      ></div>
      <div
        className={`${loadingBoxStyles.LoadingBox} ${loadingBoxStyles.LoadingBox3}`}
      ></div>
      <div
        className={`${loadingBoxStyles.LoadingBox} ${loadingBoxStyles.LoadingBox4}`}
      ></div>
      <div
        className={`${loadingBoxStyles.LoadingBox} ${loadingBoxStyles.LoadingBox5}`}
      ></div>
    </div>
  );
}

export default LoadingBox;
