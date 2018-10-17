import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const HeaderSearch = (props) => {
  const style = props.styleChild;

  return (
    <div className={ style }>
          <Link to='/search-books' className=''> Add Contact </Link>
    </div>
  )
}

HeaderSearch.propTypes = {

}

export default HeaderSearch

