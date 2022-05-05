import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productsSelectors } from 'redux/products';

const ProductCard = () => {
  const products = useSelector(productsSelectors.getProducts);
  const [productItem, setProductItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    if (!products) return;

    const targetItem = products.find(item => {
      return item.id === parseInt(itemId);
    });

    setProductItem(targetItem);
  }, [itemId, products]);

  return (
    <>
      {productItem && (
        <>
          <h3>{productItem.name}</h3>
          <p>{productItem.count}</p>
          <p>{productItem.weight}</p>
        </>
      )}
    </>
  );
};

export default ProductCard;
