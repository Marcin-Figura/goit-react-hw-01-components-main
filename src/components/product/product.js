//import logo from './logo.svg';
import '../../index.css';


export const ProductList = (props) => {
  return (
    <>
    <ul>
      {props.Product}
    </ul>
    </>
  )
}


export const Product = ({name, price, children}) => {
  
  return (
    <>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width={640}
    />
    <h2>{name}</h2>
    <p>Price: {price ? price : 'Brak ceny'} {price && '$'}</p>
    <button type="button">Add to cart</button>
    <div>{children}</div>
  </>
  );
};


export default Product;


