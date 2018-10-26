import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => (
  <div>
    <h1>Carregando o sistema...</h1>
    <CircularProgress size={60} thickness={7} />
  </div>
);

export default Loading;
