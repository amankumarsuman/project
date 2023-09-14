import React from "react";
import {TextField} from "@mui/material";

const TextFieldJS = ({style, className, inputProps, placeholder, inputPropStyle, onChange, value}) => {
    return <TextField
        value={value}
        onChange={onChange}
        className={className}
        id="outlined-basic"
        variant="outlined"
        placeholder={placeholder}
        style={{...style}}
        InputProps={{
            endAdornment: (
                inputProps
            ),
            style: (inputPropStyle
            )
        }
        }
    />

}
export default TextFieldJS;