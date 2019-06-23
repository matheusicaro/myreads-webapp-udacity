/*
* DESCRIPTION
*
* This component is responsible for demonstrating information on how to perform the research of books,
* is activated by a click controlled by 'isOpen'.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import Clear from 'material-ui/svg-icons/content/clear'
import FlatButton from 'material-ui/FlatButton'

import './DrawerMenu.scss'

export const DrawerMenu = (props) => {
  const { isOpen, topicsMenuDrawer, language, icon, openRigth, styleButton } = props
  const handleToggle = () => props.actionOpen(!isOpen)

  return (
    <div>

      <FlatButton
        label={(language.btnWhatToSearch) ? language.btnWhatToSearch : ''}
        labelPosition='before'
        primary
        onClick={handleToggle}
        icon={icon}
        style={(styleButton) ? styleButton.root : {}}
        hoverColor={(styleButton) ? styleButton.hover : ''}
      />

      <Drawer openSecondary={openRigth} open={isOpen}>

        <div className='menu-title'>
          <IconButton tooltip={language.btnClose}>
            <Clear onClick={handleToggle} />
          </IconButton>

          <h1> {language.tittle} </h1>
        </div>

        <div className='menu-body' onClick={handleToggle}>

          {(language.text) ? language.text : ''}

          {
            Array.isArray(topicsMenuDrawer) ? (
              <ul>
                { topicsMenuDrawer.map((topics, index) => (
                  <li key={index} style={styles.li}>  {topics} </li>
                ))}
              </ul>

            ) : (topicsMenuDrawer)
          }
        </div>
      </Drawer>

    </div>
  )
}

const styles = {

  li: {
    padding: '0% 0% 1.5% 0%'
  },

  body: {
    background: 'rgba(0, 0, 0, 0.84)'
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
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    borderRadius: '2px',
    userSelect: 'none',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    textAlign: 'center'
  },

  rasedButton: {
    boxShadow: '0'
  }
}
