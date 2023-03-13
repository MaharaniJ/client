import React from 'react'
import './css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import InboxIcon from "@mui/icons-material/Inbox";
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header>
    <div className='header-container'>
        <div className='header-left'>
            <Link to='/'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png' alt='logo'/>
            </Link>
            <h3>Products</h3>
        </div>
        <div className='header-middle'>
            <div className='header-search-container'>
                <SearchIcon />
                    <input type="text" placeholder='search...'></input>
                </div>
        </div>
        <div className='header-right'>
            <div className='header-right-container'>
                <Avatar />
                <InboxIcon />
                <svg aria-hidden='true'
                className='svg-icon iconStackExchange'
                width='24'
                height='24'
                viewBox='0 0 18 18'
                fill='rgba(0,0,0,0.5)'
                style={{cursor:'pointer'}}>
                   <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v313-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                    {/* <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/> */}
                    </svg>
                    
                
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header