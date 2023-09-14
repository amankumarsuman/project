import React from 'react';
import { Input } from '@mui/material';

function CustomInput(props) {
  const customStyles = `
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    padding-left: 42px;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    box-sizing: border-box;
    position: relative;
    cursor: text;
    display: inline-flex;
    align-items: center;
    color: white;
    border: 1px solid #CBD5E0; 
    padding: 0.5rem; 
    border-radius: 0.25rem;
    &:hover {
      border-color: #4A90E2; 
    }
    &:focus {
      outline: none;
      border-color: #4A90E2; 
    }
    placeholder: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: theme.spacing(1),
    pointerEvents: 'none',
    color: theme.palette.text.secondary,
  },
  `;

  return (
    <Input
        className={'pl-40'}
        style={{paddingLeft: '42px'}}
      {...props}
      sx={{ ...props.sx, css: customStyles }}
    />
  );
}

export default CustomInput;
