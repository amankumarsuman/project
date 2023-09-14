import React, {useMemo} from 'react';
import {Button} from "@mui/material";

const MUIBtn = ({name, activatedButton, onClick}) => {
    const isActivated = name === activatedButton;
    const bgColor = useMemo(() => isActivated && name === '10Q/K' ? 'pink' : isActivated && name === '8K' ? 'orange' : isActivated && name === 'Earnings' ? 'green' : isActivated && name === 'Clinical Research' ? 'gray' : isActivated && name === 'Company Doc' ? 'green' : isActivated && name === 'Miscellaneous' ? 'gray' : 'white', [onClick])
    return (
        <Button variant="contained"
                onClick={() => onClick(name, name === '10Q/K' ? `${'Earnings Call'} ` : name === '8K' ? 'Other Events' : name === 'Earnings' ? `Earnings Call` : name === 'Clinical Research' ? 'Research Document' : name === 'Company Doc' ? 'Document' : name === 'Miscellaneous' ? 'Miscellaneous' : 'Earnings')}
                style={{
                    margin: '2px',
                    color: bgColor === 'white' ? 'gray' : 'white',
                    backgroundColor: bgColor
                }}>{name}</Button>
    )
}
export default MUIBtn;