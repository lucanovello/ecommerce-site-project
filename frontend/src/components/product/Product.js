import productStyle from './Product.module.css';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

function Product(props) {
  return (
    <div className={productStyle.featuredItem}>
      <Link to={`/products/${props.product.slug}`}>
        <div className={productStyle.featuredItemImgWrapper}>
          <img
            src={props.product.image}
            alt={props.product.name}
            className={productStyle.featuredItemImg}
          />
        </div>
        <div className={productStyle.featuredItemText}>
          <h4 className={productStyle.featuredItemTitle}>
            {`${props.product.name}, ${props.product.year}`}
          </h4>
          <h5 className={productStyle.featuredItemArtist}>
            {props.product.artist}
          </h5>
          <Rating
            class={productStyle.featuredItemRating}
            rating={props.product.rating}
            numReviews={props.product.numReviews}
          />
          <h5 className={productStyle.featuredItemPrice}>
            ${props.product.price}
          </h5>
        </div>
      </Link>
    </div>
  );
}

export default Product;
