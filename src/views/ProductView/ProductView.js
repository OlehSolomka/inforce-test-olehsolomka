import ProductCard from 'components/ProductCard';
import Container from '@mui/material/Container';


const ProductView = () => {
    return (
      <>
        <Container maxWidth="xs">
          <ProductCard />
        </Container>
      </>
    );
}

export default ProductView;