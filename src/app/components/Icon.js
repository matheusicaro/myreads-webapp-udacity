import React from 'react'

export const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: props.color
    }
  }

  const { width, height } = props.size
  return (
    <svg
      style={styles.svg}
      width={`${width || props.size}px`}
      height={`${height || props.size}px`}
      viewBox='0 0 1024 1024'
    >
      <path
        style={styles.path}
        d={props.icon}
      />
    </svg>
  )
}

Icon.defaultProps = {
  size: 16
}
