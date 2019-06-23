import React from 'react'

const User = ({ language }) => {
  return (
    <div >

      <p > {language.intro}</p>
      <ul >
        {language.topics.map((topic, index) => <li key={index}>{ topic }</li>)}
      </ul>

    </div>
  )
}

export default User
