import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'



import './Header.css';

import Profile from '../../../code-testes/ProfileHeader'

const Header = () => {

  return (
    <div className='header-profile'>
      
      <Link to='/' className=''> Home </Link>
      <Profile></Profile>
      <Link to='/search-books' className=''> Add Contact </Link>

    </div>
  )
}

export default Header
