import React from 'react'

import './SecondaryButton.scss';

const SecondaryButton = ({ text, btn_icon, href }) => {

    const [isRippling, setIsRippling] = React.useState(true);

    React.useEffect(() => {
        if (!isRippling) setIsRippling(true);
    }, [isRippling]);

    return (
        <a className='app__flex-start button_icon secondary_button'
            onClick={() => setIsRippling(false)}
            href={href}
        >
            {React.createElement(btn_icon)}
            <p className='p-text p-link'>{text}</p>
            {isRippling && (
                <span className='ripple' />
            )}
        </a>
    )
}

export default SecondaryButton