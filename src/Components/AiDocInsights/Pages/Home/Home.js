import React, {useEffect, useMemo, useState} from 'react'
import axios from "axios";
import {endpoint} from "../../FMPUrlsAndEndpoint";
import LeftPanel from "../../Panels/LeftPanel";
import RightPanel from "../../Panels/RightPanel";
import Tesla from "../../../../assets/images/teslaLogo.png";

const Home = () => {
    const [activatedButton, setActivatedButton] = useState(null)
    const [label, setLabel] = useState('Earnings Calls');
    const [content, setContent] = useState('Dummy Text. Content will be displayed here');
    const [qyState, setQyState] = useState([]);
    const handleButton = (btnName, label) => {
        setLabel(label);
        setActivatedButton(btnName);
    };
    const initialState = useMemo(()=>{
        return {
        selectedCompany: {
            name: 'Tesla', logo: Tesla, companyId: 'TSLA'
        },
        year: null,
        quarter: null,
        }
    }, []);
    const [state, setState] = useState(initialState);

    useEffect(() => {
        callTranscript();

    }, [state.selectedCompany?.companyId, state.year, state.quarter]);

    const setStates = (company, year, quarter, qyToBeSelectedOrRemoved) => {
        setState(company && Object.keys(company) ? {...state, selectedCompany: company} : {
            ...state,
            year: year,
            quarter: quarter,
        })
        if (year || quarter) {
            let filteredQY = qyState.includes(qyToBeSelectedOrRemoved) ? qyState.filter((qy)=>qy!==qyToBeSelectedOrRemoved): [...qyState, qyToBeSelectedOrRemoved];
            setQyState(filteredQY);
        }
    };
    const callTranscript = () => {
        if (state.companyId || state.year || state.quarter) {
            let ep = endpoint(`v3/earning_call_transcript/${state.selectedCompany?.companyId}${state.quarter ? `?quarter=${state.quarter}` : ''}${state.year ? `&year=${state.year}` : ''}`)
            try {
                axios.post(ep).then((res) => {
                    let responseData = res.data;
                    setContent(responseData ? responseData[0]?.content : 'Dummy Text');
                });
            } catch (e) {
                console.log('eeerrr', e)
            }
        }
    }
    const getAnswer = () => {
        try {
            let ep = endpoint('v1/get_company_data_details?company_id=TSLA&doc_type=Earning_Call');
            axios.get(ep).then((res) => {
                let responseData = res.data;
                console.log('getAnswer', responseData)
            }).catch((e)=>console.log('err', e));
        } catch (e) {
            console.log('err', e)
        }
    }
    return (
        <div className={'flex flex-col sm:flex-row h-[50rem]'}>
            <LeftPanel selectedCompany={state.selectedCompany} setStates={setStates} callTranscript={callTranscript} handleButton={handleButton}
                       activatedButton={activatedButton} label={label} qyState={qyState}/>
            <RightPanel getAnswer={getAnswer} label={label} state={state} content={content}/>
        </div>
    );
};
export default Home;