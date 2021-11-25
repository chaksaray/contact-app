import React from 'react';

import { Button } from 'react-bootstrap';
import './SocialButton.css';

const SocialButton = (props) => {
    return (
        <Button
            variant="outline-primary"
            style={{
                'border-radius': '50px',
                width: '25px',
                height: '25px',
                margin: '0 2px',
            }}
        >
            {props.children}
        </Button>
    );
};

export default SocialButton;
