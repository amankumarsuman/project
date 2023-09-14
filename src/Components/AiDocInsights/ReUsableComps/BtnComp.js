import React from 'react';
import {Button} from "@mui/material";

const BtnComp = ({name, variant = 'contained', style, className = '', onClick}) => {
    return (
        <Button variant={variant} onClick={onClick} className={className} style={{...style}}>
            {name}
        </Button>
    )
}
export default BtnComp;