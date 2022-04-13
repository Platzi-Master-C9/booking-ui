import React from 'react';

const divAlternativeLogin = {
    paddingTop: '8px',
    paddingBottom: '8px'
}

const loginSocialButton = {
    width: '100%',
    height: '72px',
    borderRadius: '24px',
    fontSize: '18px',
    background: '#ffffff'
}

const loginSocialIcon = {
    float: 'left',
    marginLeft: '16px',
    paddingTop: '8px',
    background: '#45A2F7',
    color: '#ffffff',
    width: '32px',
    height: '32px',
    borderRadius: '50%'
}

const loginSocialText = {
    position: 'relative',
    top: '8px',
}

export const LoginSocialButton = (params) => {
    return (
        <div style={divAlternativeLogin}>
            <button style={loginSocialButton}>
                <span className={params.icon} style={loginSocialIcon}></span>
                <span style={loginSocialText}>{params.text}</span>
            </button>
        </div>
    );
};
