import { Helmet } from 'react-helmet-async';

function Products(props) {
  return (
    <div>
      <Helmet>
        <title>
          {props.headerTitle
            ? props.headerTitle
            : 'Luca Novello | Ecommerce Website'}
        </title>
      </Helmet>
      <h1>Products PAGE</h1>
    </div>
  );
}

export default Products;
