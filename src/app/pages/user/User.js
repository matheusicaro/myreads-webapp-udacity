import React from 'react'

const User = ({ language }) => {
    return (
        <div style={styles.root}>

            <p style={styles.p}> {language.intro}</p>
            <ul style={styles.ul}>
                {language.topics.map((topic,index) => <li key={index}>{ topic }</li>)}
            </ul>

        </div>
    )
}

export default User

const styles = {
    root: {
        fontSize: '20px',
        color: '#ff0000cc'
    },
    p: {
        padding: '0% 10% 0% 10%'
    },
    ul: {
        padding: '0% 15% 0% 15%'
    }
}