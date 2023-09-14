import React from 'react';
import TextFieldJS from "../ReUsableComps/TextFieldJS";
import {IconButton, InputAdornment} from "@mui/material";
import {blue} from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import Image from "../ReUsableComps/Image";
// import TeslaPng from "../../../assets/images/teslaLogo.png";
import MUIBtn from "../ReUsableComps/MUIBtn";
import PaperJS from "../ReUsableComps/Paper";
import GrayContainer from "../ReUsableComps/GrayContainer";
import './LeftPanel.css'
// import {endpoint} from "../endpoint";
// import axios from "axios";

const LeftPanel = ({label, activatedButton, handleButton, setStates, qyState, selectedCompany}) => {
    return (
        <div className={'m-2 w-[100%] sm:w-[60%] l:50 sm:mr-0 mr-2'}>
            <GrayContainer className={'block sm:flex md:flex justify-evenly rounded-md p-2 mb-2'}>
                <div className={'w-[100%] sm-55 sm:mb-0 mb-2 mr-2'}>
                    <TextFieldJS placeholder={'Search your items...'} className={'w-[100%] sm-55 sm:mr-2 mr-2'}
                                 inputProps={<InputAdornment position="end">
                                     <IconButton style={{backgroundColor: blue[500]}}>
                                         <SearchIcon style={{color: 'white', borderRadius: '8px'}}/>
                                     </IconButton>
                                 </InputAdornment>
                                 } style={{backgroundColor: 'white', borderRadius: '8px'}}/>
                </div>
                <div
                    className={'flex items-center justify-between sm:justify-evenly bg-white rounded-lg w-[100%] sm:w-[90%]'}>
                    <Image src={selectedCompany?.logo} height={'30px'} width={"30px"}/>
                    <span className={'text-l text-black'}>{selectedCompany?.name}&nbsp;<span className={'text-red-500'}>241(-2.00%)</span></span>
                </div>
            </GrayContainer>
            <GrayContainer className={'rounded-md p-2'}>
                <MUIBtn name={'Earnings'} onClick={handleButton} activatedButton={activatedButton}/>
                <MUIBtn name={'10Q/K'} onClick={handleButton} activatedButton={activatedButton}/>
                <MUIBtn name={'8K'} onClick={handleButton} activatedButton={activatedButton}/>
                <MUIBtn name={'Clinical Research'} onClick={handleButton} activatedButton={activatedButton}/>
                <MUIBtn name={'Company Doc'} onClick={handleButton} activatedButton={activatedButton}/>
                <MUIBtn name={'Miscellaneous'} onClick={handleButton} activatedButton={activatedButton}/>
                <hr className="mt-2 border-t-2 border-gray-600"/>
                <div className="flex justify-evenly">
                    <div className={'w-[40%] mt-2'}>
                        <PaperJS setStates={setStates} qyState={qyState}/>
                    </div>
                    <div style={{backgroundColor: 'gray'}} className=" bg-gray-700 rounded-lg w-[0.5px] ">
                    </div>
                    <div className={' mt-2 w-[55%]'}>
                        <PaperJS type='QuarterAnalysis' qyState={qyState} label={label}
                                 setStates={setStates}/>
                    </div>
                </div>
            </GrayContainer>
        </div>
    )
}
export default LeftPanel;