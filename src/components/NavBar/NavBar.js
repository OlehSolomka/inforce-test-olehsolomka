import { Link } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function NavBar() {
  return (
    <Container  maxWidth="xs">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              test task
            </Typography>
            <DropDownMenu />
            <Link
              to={'/add'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Button color="inherit">Add</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
