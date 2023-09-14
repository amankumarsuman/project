import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import {DarkGrayContainer, GContainer} from "./GrayContainer";

const QuarterAnalysis = ({index, label, setStates, qyState}) => {
    return (
        <div key={index}>
            <DarkGrayContainer
                className={'flex justify-end text-white text-sm font-light p-1'}>{2023 - (index + 1)}</DarkGrayContainer>
            <GContainer className={'bg-[#494040] border-b-2 text-white text-sm font-light '}
                        key={index}>
                {Array.from({length: 4}, (_, indexKey) => <FormControl label={label} index={index}
                                                                       indexKey={indexKey} setStates={setStates}
                                                                       qyState={qyState}/>)}
            </GContainer>
        </div>
    )
}

const FormControl = ({label, index, indexKey, setStates, qyState}) => {
    return <div className={'w-[100%] border-b-2 border-gray-800 px-2 py-1 cursor-pointer'}
                onClick={() => {
                    setStates(null, 2023 - (index + 1), indexKey + 1, `${2023 - (index + 1)}, ${indexKey + 1}`)
                }
                }><FormControlLabel
        control={<Checkbox sx={{
            color: 'white',
            marginRight: '10px',
        }} checked={qyState.includes(`${2023 - (index + 1)}, ${indexKey + 1}`)}/>}
        label={label && label.includes("Earnings") ? label + ` Q${indexKey + 1} ${2023 - (index + 1)}` : label}
    /></div>
}
export default QuarterAnalysis;