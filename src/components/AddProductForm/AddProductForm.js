import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import schema from './validation';
import { useDispatch } from 'react-redux';
import { productsOperations } from 'redux/products';

export default function AddProductForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    name: '',
    count: '',
    width: '',
    height: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: ({ name, count, width, height }) => {
      const data = {
        name,
        count,
        size: {
          width,
          height,
        },
      };
      dispatch(productsOperations.postProduct(data));
      history.goBack();
    },
  });

  return (
    <Box
      sx={{
        padding: '50px 30px',
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField
          id="name"
          name="name"
          variant="filled"
          type="name"
          error={formik.touched.name && !!formik.errors.name}
          helperText={
            formik.touched.name && !!formik.errors.name
              ? formik.errors.name
              : null
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          label="Product Name"
          sx={{
            width: '375px',
            height: '50px',
            mb: '35px',
          }}
        />
        <TextField
          id="count"
          name="count"
          variant="filled"
          type="count"
          error={formik.touched.count && !!formik.errors.count}
          helperText={
            formik.touched.count && !!formik.errors.count
              ? formik.errors.count
              : null
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.count}
          label="Product count"
          sx={{
            width: '375px',
            height: '50px',
            mb: '35px',
          }}
        />
        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.width}
          id="width"
          type="text"
          name="width"
          variant="filled"
          label="Product width"
          error={formik.touched.width && !!formik.errors.width}
          helperText={
            formik.touched.width && !!formik.errors.width
              ? formik.errors.width
              : null
          }
          sx={{
            width: '375px',
            height: '50px',
            mb: '35px',
            borderBottom: 'none',
          }}
        />
        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.height}
          id="height"
          type="text"
          name="height"
          variant="filled"
          label="Product Height"
          error={formik.touched.height && !!formik.errors.height}
          helperText={
            formik.touched.height && !!formik.errors.height
              ? formik.errors.height
              : null
          }
          sx={{
            width: '375px',
            height: '50px',
            borderBottom: 'none',
          }}
        />

        <Button
          type="submit"
          disabled={formik.isSubmitting}
          variant="contained"
          sx={{
            mt: '35px',
            backgroundColor: 'primary.main',
            width: '375px',
            height: '42px',
          }}
        >
          Add Product
        </Button>
      </form>
    </Box>
  );
}
