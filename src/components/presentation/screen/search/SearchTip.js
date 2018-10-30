import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import FlatButton from 'material-ui/FlatButton';
import Arrow from 'material-ui/svg-icons/action/help';

import './SearchTip.css'

const SearchTip = (props) => {

  const { isOpen } = props;
  const handleToggle = () => props.actionSearchTip(!isOpen);

  return (
    <div>

      <FlatButton
        label="O que pesquisar"
        labelPosition="before"
        primary={true}
        onClick={handleToggle}
        icon={<Arrow
        />}
      />

      <Drawer width={'40%'} openSecondary={true} open={isOpen} >

        <div className="title">
          <IconButton tooltip="Fechar">
            <Clear onClick={handleToggle} color='rgba(48, 48, 48)' />
          </IconButton>

          <h1 className="title-h1"> DICAS PARA PESQUISAR </h1>

        </div>

        <div style={styles.div} >

          Busque por livros com base nas categorias abaixo, ou ainda, pode puscar apenas por suas iniciais como "An", "Ba", por exemplo.

          <ul>
            {itensSearch.map((topics, index) => (
              <li key={index} style={styles.li}>  {topics} </li>
            ))
            }
          </ul>

        </div>
      </Drawer>

    </div>
  );
}

export default SearchTip

const itensSearch = [
  ['Android, Art, Artificial Intelligence, Astronomy, Austen'],
  ['Baseball, Basketball, Bhagat, Biography, Brief, Business'],
  ['Camus, Cervantes, Christie, Classics, Comics, Cook, Cricket, Cycling'],
  ['Desai, Design, Development, Digital Marketing, Drama, Drawing, Dumas'],
  ['Education, Everything, Fantasy, Film, Finance, First, Fitness, Football, Future'],
  ['Games, Gandhi, Homer, Horror, Hugo, Ibsen, iOS, Journey, Kafka, King'],
  ['Lahiri, Larsson, Learn, Literary Fiction, Make, Manage, Marquez, Money, Mystery'],
  ['Negotiate, Painting, Philosophy, Photography, Poetry, Production, Programming'],
  ['React, Redux, River, Robotics, Rowling, Satire, Science Fiction, Shakespeare, Singh, Swimming'],
  ['Tale, Thrun, Time, Tolstoy, Travel, Ultimate, Virtual Reality, Web Development'],
];

const styles = {

  div: {
    font: '600 16px/25px Open Sans, sans-serif',
    margin: '5% 5% 5% 5%'
  },

  li: {
    padding: '0% 0% 1.5% 0%'
  },

  button: {
    border: '10px',
    boxSizing: 'border-box',
    display: 'inline-block',
    fontFamily: 'Roboto, sans-serif',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '0px',
    padding: '0px',
    outline: 'none',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    position: 'relative',
    height: '36px',
    lineHeight: '36px',
    minWidth: '88px',
    color: 'rgb(0, 151, 167)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    borderRadius: '2px',
    userSelect: 'none',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    textAlign: 'center',
  },

  rasedButton: {
    boxShadow: '0'
  }
}





