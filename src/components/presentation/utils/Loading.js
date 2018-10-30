import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => (
  <div style={styles}>
    <CircularProgress style={styles.childre} size={60} thickness={7} />
  </div>
);

export default Loading;

const styles = {
  alignItems: 'center',
  height: '-webkit-fill-available',

  childre:{
    display: 'absolute',
    left: '50%',
    top: '40%',
  }
}