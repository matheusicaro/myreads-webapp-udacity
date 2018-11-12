import React from 'react'

import IconButton from 'material-ui/IconButton';
import Brazil from '../../media/icons/brazil.svg'
import USA from '../../media/icons/usa.svg'
import Spain from '../../media/icons/spain.svg'

import '../../styles/components/LanguagesBtn.css'

const ButtonsTranslate = (props) => {

    const changeToBr = () => {
        props.changeLanguage("pt-BR")
    }

    const changeToEn = () => {
        props.changeLanguage("en-US")
    }

    const changeToEs = () => {
        props.changeLanguage("es-ES")
    }

    const { button } = props;

    return (
        <React.Fragment>
            <span style={{ display: 'flex' }}>
                <div className="b-hover b-hover-overwrite IconButton"> <IconButton style={styles.icon.brazil} onClick={changeToBr} tooltip={button.BR} /> </div>
                <div className="b-hover b-hover-overwrite IconButton"> <IconButton style={styles.icon.usa} onClick={changeToEn} tooltip={button.EN} /> </div>
                <div className="b-hover b-hover-overwrite IconButton"> <IconButton style={styles.icon.spain} onClick={changeToEs} tooltip={button.ES} /> </div>
            </span>
        </React.Fragment>
    )
}

export default ButtonsTranslate


const styles = {

    icon: {
        brazil: {
            background: `url(${Brazil})`,
            backgroundSize: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        },
        usa: {
            background: `url(${USA})`,
            backgroundSize: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        },
        spain: {
            background: `url(${Spain})`,
            backgroundSize: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
    },
}