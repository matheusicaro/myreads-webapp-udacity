import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

import './SearchTip.css'
import { element } from 'prop-types';

const SearchTip = (props) => {

  const { isOpen } = props;

  const handleToggle = () => props.actionSearchTip(!isOpen);

  return (
    <div>
      <RaisedButton
        label="Toggle Drawer"
        onClick={handleToggle}
      />
      <Drawer width={'40%'} openSecondary={true} open={isOpen} >
        
        <div className="title">
          <h1 className="title-h1"> DICAS PARA PESQUISAR </h1>>
        </div>
       
        <div style={{ margin: '5% 5% 5% 5%' }} >   
          Busque por livros com base nas categorias abaixo, ou ainda, pode puscar por iniciais como: "Android" -> "An"", wifi" -> "wi", entre outros...
          <ol>
            {listSearch()}
          </ol>
        </div>

      </Drawer>
    </div>
  );
}

export default SearchTip

const listSearch = () => {
  let options;

  for (let object in itensSearch) {
    itensSearch[object].map(element => {
      options += `
                <li key={${object}}>
                    (${object}): ${element}
                 </li>
                `
    })
  }

  return options;
}

const itensSearch = {
  A: ['Android', ', Art', ', Artificial Intelligence', ', Astronomy', ', Austen'],
  B: ['Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business'],
  C: ['Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling'],
  D: ['Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas'],
  EF: ['Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future'],
  IGK: ['Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'iOS', 'Journey', 'Kafka', 'King'],
  LM: ['Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery'],
  NP: ['Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming'],
  RS: ['React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming'],
  TUVW: ['Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development'],
}



