import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => (
  <div style={style}>
    <CircularProgress size={60} thickness={7} />
  </div>
);

export default Loading;

const style = {
  position: 'absolute',
  left: '50%',
  top: '40%',
}