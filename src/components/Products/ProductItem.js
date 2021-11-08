import React from 'react';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';

const ProductItem = React.memo(props => {
  const dispatch = useStore(false)[1];
  // Passing-in 'false' here, means that this component will not register a listener in our global 'listeners' array (in Store.js)
  // This will stop this component from re-rendering when the store changes
  // However, if it is favourited/unfavourited, it will still re-render
  // This is because the props (passed-in from Products.js) will change
  // This means that each time a product is favourited/unfavourited, just that 'ProductItem' component will re-render, instead of all 'ProductItem' components

  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className='product-item'>
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button className={!props.isFav ? 'button-outline' : ''} onClick={toggleFavHandler}>
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
