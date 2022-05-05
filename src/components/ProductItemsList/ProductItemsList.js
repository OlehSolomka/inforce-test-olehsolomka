import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productsSelectors, productsOperations } from 'redux/products';
import { useDispatch } from 'react-redux';


const ProductItemsList = () => {
  const products = useSelector(productsSelectors.getProducts);
  const sortingMethod = useSelector(productsSelectors.getSortingMethod);
  const [sortedProducts, setSortedProducts] = useState(null);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(productsOperations.deleteProduct(id));
  }

  useEffect(() => {
    if (!products) return;

    switch (sortingMethod) {
      case 'name/down':
        setSortedProducts(
          [...products].sort((a, b) => {
            const normalizedA = a.name.toLowerCase();
            const normalizedB = b.name.toLowerCase();
            if (normalizedA < normalizedB) return -1;
            if (normalizedA > normalizedB) return 1;
            return 0;
          })
        );
        break;
      case 'name/up':
        setSortedProducts(
         [...products].sort((a, b) => {
            const normalizedA = a.name.toLowerCase();
            const normalizedB = b.name.toLowerCase();
            if (normalizedA < normalizedB) return 1;
            if (normalizedA > normalizedB) return -1;
            return 0;
          })
        );
        break;
      case 'count/up':
        setSortedProducts(
         [...products].sort((a, b) => {
            return a.count - b.count;
          })
        );
        break;
      case 'count/down':
        setSortedProducts(
         [...products].sort((a, b) => {
            return b.count - a.count;
          })
        );
        break;

      default:
        break;
    }
  }, [products, sortingMethod]);

  return (
    <>
      <List>
        {sortedProducts &&
          sortedProducts.map(({ id, name, count }) => {
            return (
              <ListItem
                key={id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      onDelete(id);
                    }}
                  >
                    <DeleteForeverIcon color="primary" />
                  </IconButton>
                }
              >
                <Link
                  to={`/${id}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <ListItemText primary={name} />
                </Link>
                <ListItemText
                  primary={`quantity: ${count}`}
                  sx={{
                    textAlign: 'right',
                  }}
                />
              </ListItem>
            );
          })}
      </List>
    </>
  );
};

export default ProductItemsList;
