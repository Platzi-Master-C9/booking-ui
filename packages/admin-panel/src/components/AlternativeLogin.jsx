import React from 'react';

const div_alternative_login = {
    padding: '32px'
}

const login_social_button = {
    width: '100%',
    height: '72px',
    borderRadius: '24px',
    fontSize: '18px',
    background: '#ffffff',
    marginTop: '8px',
    marginBottom: '8px'
}

const login_social_icon = {
    float: 'left',
    marginLeft: '16px',
    paddingTop: '8px',
    background: '#45A2F7',
    color: '#ffffff',
    width: '32px',
    height: '32px',
    borderRadius: '50%'
}

const login_social_text = {
    position: 'relative',
    top: '8px',
}

export const AlternativeLogin = () => {
    return (
        <div style={div_alternative_login}>
            <div style={{fontSize: '14px', color:'#666666', marginBottom:'8px'}}>O ingresa con:</div>
            
            <button style={login_social_button}>
                <span className="fa fa-facebook" style={login_social_icon}></span>
                <span style={login_social_text}>Continúa con Facebook</span>
            </button>
            
            <button style={login_social_button}>
                <span className="fa fa-twitter" style={login_social_icon}></span>
                <span style={login_social_text}>Continúa con Twitter</span>
            </button>
        </div>
    );
};
