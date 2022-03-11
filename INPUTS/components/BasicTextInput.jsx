import React from 'react';

const div = {
    width: '90%',
    padding: '1px',
    margin: '0 auto'
}

const input = {
    width: '100%',
    height: '76px',
    background: '#FFFFFF',
    border: '1px solid #9B9B9B',
    boxSizing: 'border-box',
    borderRadius: '24px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '27px',
    color: '#000000',
    paddingLeft: '16px',
    paddingTop: '16px'
};

const label = {
    position: 'absolute',
    width: '136px',
    height: '24px',
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    marginLeft: '16px',
    marginTop: '8px'
};

export default function  BasicTextInput(props){
    return (
        <div style={div}>
            <label style={label}>{props.label || 'Label'}</label>
            <input 
                type="text" 
                style={input} 
                placeholder={props.hint || ''} 
                id={props.id}
            />
        </div>
    );
}
