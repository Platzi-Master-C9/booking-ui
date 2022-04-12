import React from 'react';
import { LoginSocialButton } from './LoginSocialButton';

const divAlternativeLogin = {
    padding: '32px'
}

const headerAlternativeLogin = {
    fontSize: '14px', 
    color:'#666666', 
    marginBottom:'8px'
}

export const AlternativeLogin = () => {
    return (
        <div style={divAlternativeLogin}>
            <div style={headerAlternativeLogin}>O ingresa con:</div>

            <LoginSocialButton text="Continúa con Facebook" icon="fa fa-facebook" />

            <LoginSocialButton text="Continúa con Twitter" icon="fa fa-twitter" />
        </div>
    );
};
