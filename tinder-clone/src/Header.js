import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <div className='header'>
        <h2>I am a header</h2>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon'></PersonIcon>
        </IconButton>

    </div>
  )
}

export default Header