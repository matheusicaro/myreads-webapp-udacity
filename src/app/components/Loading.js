/*
* DESCRIPTION
*
* Reusable component and responsible to load the load on API calls.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

export const Loading = () => (
  <div style={styles}>
    <CircularProgress style={styles.childre} size={60} thickness={7} />
  </div>
)

const styles = {
  alignItems: 'center',
  height: '-webkit-fill-available',

  childre: {
    display: 'absolute',
    left: '50%',
    top: '20%'
  }
}
