import React from 'react'

import image from '../../media/images/profile-avatar.png'

const User = () => {
    return (
        <div>
            <form onSubmit={this.handleSubmit} className='create-contact-form'>
                <img src={image} alt="Avatar" />
                
                <div className='create-contact-details'>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='text' name='handle' placeholder='Handle' />
                    <button>Add Contact</button>
                </div>
            </form>

        </div>
    )
}

export default User
