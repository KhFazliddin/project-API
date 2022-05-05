import React from 'react'
import "./productsList.css";
import Product from '../Product/product'
function ProductsList(props) {
    const { id, category, title, image,soni, rating, price, description } = props;
  return (
    <div className='products_list'>
    <Product 
        key={id}
        id={id}
        title={title}
        rating={rating}
        image={image}
        description={description}
        price={price}
        category={category}
        soni={soni}
     />
        </div>
  )
}

export default React.memo(ProductsList);