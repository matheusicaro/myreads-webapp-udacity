import React from 'react'

import image from '../../media/images/profile-avatar.png'

const User = () => {
    return (
        <div style={styles.root}>
            {/* <form onSubmit={this.handleSubmit} className='create-contact-form'>
                <img src={image} alt="Avatar" />
                
                <div className='create-contact-details'>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='text' name='handle' placeholder='Handle' />
                    <button>Add Contact</button>
                </div>
            </form> */}

            <p>Está página está em construção, assim que possivel será implementado funcionalidades como: </p>
            <ul>
                <li>Edição do perfil, dados, foto de perfil, entre outros...</li>
                <li>A estante de cada livro será salvo em banco de dados, provalvemente no Firebase, com isto, cada usuario poderá guardar o seu perfil.</li>
                <li>Altentição com redes sociais.</li>
                <li>Entre outras novidades...</li>
            </ul>

        </div>
    )
}

export default User

const styles = {
    root: {
        position: 'relative',
        left: '20%',
        fontSize: '20px',
        color: '#ff0000cc'
    }
}