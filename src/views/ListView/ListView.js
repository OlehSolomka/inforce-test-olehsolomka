import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { productsOperations } from 'redux/products';
import ProductItemsList from 'components/ProductItemsList';
import Container from '@mui/material/Container';

const ListView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperations.getProducts());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="xs">
        <ProductItemsList />
      </Container>
    </>
  );
};

export default ListView;
