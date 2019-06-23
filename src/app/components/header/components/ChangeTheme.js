import React, { Component } from 'react'
import { Toggle } from 'material-ui'

class ChangeTheme extends Component {
  state = { isDarkThemeDefault: true }

  handleTheme = () => {
    this.setState({ isDarkThemeDefault: !this.state.isDarkThemeDefault })
    this.props.select()
  }

  render () {
    return (
      <div style={styles.container}>
        <h4> Dark </h4>
        <Toggle
          style={styles.margin}
          onToggle={this.handleTheme}
          thumbStyle={styles.thumbOff}
          trackStyle={styles.trackOff}
          thumbSwitchedStyle={styles.thumbSwitched}
          trackSwitchedStyle={styles.trackSwitched}
        />
        <h4> Ligth </h4>
      </div>
    )
  }
}

const styles = {
  container: {
    'display': 'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
    'justifyContent': 'center',
    'alignItems': 'center',
    'alignContent': 'center',
    'marginRight': '15px'
  },
  margin: {
    margin: '0px 8px 0px 0px',
    width: '0'
  },
  thumbOff: {
    backgroundColor: '#808080'
  },
  trackOff: {
    backgroundColor: 'rgb(0, 188, 212)'
  },
  thumbSwitched: {
    backgroundColor: '#ffffff'
  },
  trackSwitched: {
    backgroundColor: 'rgb(0, 188, 212)'
  }
}

export default ChangeTheme
