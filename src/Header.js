import React from 'react'
import "./Header.css"
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const Header = () => {
  return (
    <div className='header'>
         <div className='header__left'>
            <Avatar className='header__avatar'
            alt='clever programmer'
            src=''
            />
            <AccessTimeIcon/>
            {/* Avatars for logged in user */}
            {/* Time icon */}
         </div>
         <div className='header__search'>
            {/* Search icon */}
            <SearchIcon/>
            {/* input */}
            <input placeholder='Search Clever Programmer'/>
         </div>
         <div className='header__right'>
            <HelpOutlineIcon/>
            {/* help icon */}

         </div>
    </div>
  )
}

export default Header