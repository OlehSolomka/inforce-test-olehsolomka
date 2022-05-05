import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { productsActions } from 'redux/products';
import { useDispatch } from 'react-redux';

export default function DropDownMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {

    setAnchorEl(null);
  };

  const alphabetClick = () => {
    dispatch(productsActions.setNameDown('name/down'));
    setAnchorEl(null);
  };

  const reverseAlphabetClick = () => {
    dispatch(productsActions.setNameUp('name/up'));
    setAnchorEl(null);
  };
  const ascendingClick = () => {
    dispatch(productsActions.setNumbetUp('count/up'));
        setAnchorEl(null);
  };
  const descendingClick = () => {
    dispatch(productsActions.setNumberDown('count/down'));
        setAnchorEl(null);
  };


  return (
    <div>
      <Button
        sx={{
          color: 'white',
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Sort by
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={alphabetClick}>Name alphabetic</MenuItem>
        <MenuItem onClick={reverseAlphabetClick}>
          Name reverse alphabet
        </MenuItem>
        <MenuItem onClick={ascendingClick}>Count by ascending</MenuItem>
        <MenuItem onClick={descendingClick}>Count by descending</MenuItem>
      </Menu>
    </div>
  );
}
