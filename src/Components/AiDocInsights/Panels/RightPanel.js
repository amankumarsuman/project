import React, {useState} from "react";
import ApexPieChartJS from "../ReUsableComps/ApexPieChartJS";
import TextFieldJS from "../ReUsableComps/TextFieldJS";
import {IconButton, InputAdornment} from "@mui/material";
import {blue} from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import GrayContainer from "../ReUsableComps/GrayContainer";

const RightPanel = ({content, state, label, getAnswer}) => {
    const [query, setQuery] = useState('');
    return (
        <GrayContainer id={'right-panel'}
                       className={'w-[100%] rounded-md p-2 m-2  mb-[6rem] sm:mb-[-1rem]'}>
            <div>
                <div className={'flex justify-evenly items-center h-[25vh] sm:h-[20vh]'}>
                    <div className={'w-[35%]'}>
                        <div className={'flex'}>
                            <ApexPieChartJS className={'donut-pie-chart color-white w-1/3 ml-2'}
                                            PosOrNeg={'Positive'} value={45} bgColor={'#0ed318'}/>
                            <ApexPieChartJS className={'donut-pie-chart color-white w-2/3'} PosOrNeg={'Negative'}
                                            value={25} bgColor={'#ff0000'}/>
                        </div>
                        <div className={'mt-2 ml-2'}>
                            <TextFieldJS placeholder={'keyword search...'} inputPropStyle={{color: 'white'}}
                                         inputProps={<InputAdornment position="end">
                                             <IconButton style={{backgroundColor: blue[500]}}>
                                                 <SearchIcon style={{color: 'white'}}/>
                                             </IconButton>
                                         </InputAdornment>
                                         }
                                         style={{backgroundColor: '#494040', borderRadius: '8px', width: '100%'}}/>
                        </div>
                    </div>
                    <div className={'w-[65%] mx-3 bg-[#494040] p-3 h-[10rem] rounded-md'}>
                        <div>
                            <Link to={'/'} className={'block text-blue-600 text-sm'}>heading 1</Link>
                            <Link to={'/'} className={'block text-blue-600 text-sm'}>heading 2</Link>
                            <Link to={'/'} className={'block text-blue-600 text-sm'}>heading 3</Link>
                            <Link to={'/'} className={'block text-blue-600 text-sm'}>heading 4</Link>
                            <Link to={'/'} className={'block text-blue-600 text-sm'}>heading 5</Link>
                        </div>
                    </div>

                </div>

                <div className={'h-auto  mb-16 text-white sm:h-[37rem] sm:mb-0'}>
                    <div className={'bg-[#494040] rounded-md m-2 '}>
                        <h1 className={'text-xl px-4 py-2'}>Q{state.quarter}&nbsp;{state.year}&nbsp;{label}</h1>
                        <p className={'p-4 pt-0 mb-0 max-h-auto overflow-auto sm:max-h-[56vh] overflow-y-auto'}>
                            {content}
                        </p></div>
                </div>
                <div className={'m-2 relative'}>
                    <TextFieldJS onChange={(e) => setQuery(e.target.value)} value={query} placeholder={'Ask a question'}
                                 inputPropStyle={{color: 'white'}}
                                 inputProps={<InputAdornment onClick={getAnswer} position="end">
                                     <IconButton>
                                         <SendIcon style={{color: 'white', borderRadius: '8px'}}/>
                                     </IconButton>
                                 </InputAdornment>
                                 } style={{
                        backgroundColor: 'gray',
                        borderRadius: '8px',
                        width: '100%',
                        marginTop: '10px',
                        position: 'absolute',
                        bottom: 0
                    }}/>
                </div>
            </div>
        </GrayContainer>
    )
};
export default RightPanel;