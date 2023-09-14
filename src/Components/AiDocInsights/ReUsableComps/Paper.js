import React from 'react';
import Paper from '@mui/material/Paper';
import {CompanyData} from "./Data";
import QuarterAnalysis from "./QuarterAnalysis";
import Image from './Image';
import {DarkGrayContainer} from "./GrayContainer";

const PaperJS = (props) => {
    const styles = {
        container: {
            height: '64vh',
            overflow: 'auto',
            backgroundColor: 'gray',
        },
        container2: {
            height: '68vh',
            overflow: 'auto',
            backgroundColor: 'gray',
        },
    };
    return (
        props.type === 'QuarterAnalysis' ?
            <Paper elevation={3} style={styles.container2}>
                {Array.from({length: 5}, (_, index) =>
                    <QuarterAnalysis qyState={props.qyState} index={index} label={props.label}
                                     setStates={props.setStates}/>
                )}
            </Paper>
            :
            <div>
                <DarkGrayContainer className={'text-white text-sm font-light p-1'}>Top Stocks</DarkGrayContainer>
                <Paper elevation={3} style={styles.container}>
                    {/* Your scrollable content */}
                    {CompanyData.map((company, index) => (
                        <div
                            name={'companyId'}
                            onClick={() => props.setStates(company, null, null)}
                            className={'bg-[#494040] grid grid-cols-[10%,auto] cursor-pointer items-center border-b-2 border-gray-800 text-white text-sm font-light p-2'}
                            key={index}>
                            <Image src={company.logo} height={'20px'} width={'20px'}/>
                            <span
                            className={'flex justify-start ml-2'}>{company.name}</span></div>
                    ))}
                </Paper></div>
    )
};
export default PaperJS;