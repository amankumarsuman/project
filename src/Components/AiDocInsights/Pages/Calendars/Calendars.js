import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {Box, Grid} from "@mui/material";
import TableComp from "../../ReUsableComps/TableComp";
import ButtonComp from '../../ReUsableComps/BtnComp';
import Calender from "../../../BioTechComponents/Calender/Calender";
import axios from "axios";
import {baseUrl} from "../../FMPUrlsAndEndpoint";

const CalendarElement = () => {
    const [calType, setCalType] = useState('earningCalendar'); //calendar type

    useEffect(() => {
        callFMPCalApi();
    }, [calType])
    const navigateTo = (calType) => {
        setCalType(calType);
    };
    const [fmpCal, setFmpCal] = useState([]);
    const [dates, setDates] = useState([]);

    const callFMPCalApi = () => {
        let endpoint = baseUrl + 'get_fmp_cal_data/';
        let data = {
            version: calType === 'ipo' ? "v4" : 'v3',
            type: calType === 'dividendCalendar' ? 'stock_dividend' : calType === 'split' ? 'stock_split' : calType === 'ipo' ? 'ipo-calendar-' : calType === 'earningCalendar' ? 'earning' : calType,
            view_type: calType === 'ipo' ? "confirmed" : '_calendar',
        };

        axios.post(endpoint, data).then((res) => {
            let responseData = res.data;
            responseData = JSON.parse(responseData.response);
            console.log('responseData', responseData);
            if (!responseData.success) {
                return;
            }
            let dateArr = []
            responseData.fmp_cal_data?.map((item)=>{
                if(calType === 'dividendCalendar') {
                    dateArr.push({start: item.date, title: item.symbol, color: 'blue',})
                    dateArr.push({start: item.fiscalDateEnding, title: item.symbol, color: 'red',})
                    dateArr.push({start: item.updatedFromDate, title: item.symbol, color: 'green',})
                }else if(calType === 'ipo'){
                    let acceptedDate = item.acceptedDate?.split(' ')[0];
                    dateArr.push({start: acceptedDate, title: item.symbol, color: 'blue',})
                    dateArr.push({start: item.effectivenessDate, title: item.symbol, color: 'red',})
                    dateArr.push({start: item.filingDate, title: item.symbol, color: 'green',})
                }else if(calType === 'split'){
                    dateArr.push({start: item.date, title: item.symbol, color: 'blue',})
                }
            })
            let fmpCalData;
            if (calType === 'ipo') {
                fmpCalData = responseData.fmp_cal_data.filter((item) => {
                    item.acceptedDate = item.acceptedDate?.split(' ')[0];
                    return item;
                })
            }else{
                fmpCalData = responseData.fmp_cal_data;
            }
            setDates(dateArr);
            setFmpCal(fmpCalData);
        })
    };

    const TableCellStyle = useMemo(() => {
        return {
            fontWeight: 800,
            color: 'white'
        }
    }, [])

    const getStyle = useCallback((index) => {
        return {...TableCellStyle, backgroundColor: index % 2 === 0 ? '#002147' : '#12192c'}
    }, []);

    const TableCellSX = useMemo(() => {
        return {
            backgroundColor: '#12192c',
            fontWeight: 800,
            color: 'white'
        }
    }, [])

    const tableCompMemo = useMemo(() => <TableComp calType={calType} TableCellSX={TableCellSX}
                                                   rows={fmpCal}
                                                   getStyle={getStyle}
                                                   parent={'calendar'} paperStyle={{
        height: '80vh',
        overflow: 'auto',
        width: '50%',
        backgroundColor: '#12192c',
    }}/>, [calType, fmpCal]);

    const calMemo = useMemo(()=><Calender propsEvents={dates} color={'null'}/>, [dates])
    return (
        <Box>
            <div className={'flex justify-evenly items-center my-4'}>
                <Grid item md={8} xs={25}>
                    <ButtonComp onClick={() => navigateTo('earningCalendar')} name={'Earning Calendar'}
                                variant={calType !== 'earningCalendar' ? "outlined" : 'contained'}
                                className="searchBtn"/>
                </Grid>
                <Grid item md={8} xs={25}>
                    <ButtonComp onClick={() => navigateTo('dividendCalendar')} name={'DIVIDEND CALENDAR'}
                                variant={calType !== 'dividendCalendar' ? "outlined" : 'contained'}
                                className="searchBtn"/>
                </Grid>

                <Grid item md={8} xs={25}>
                    <ButtonComp onClick={() => navigateTo('ipo')} name={'IPO'}
                                variant={calType !== 'ipo' ? "outlined" : 'contained'}
                                className="searchBtn"/>
                </Grid>
                <Grid item md={8} xs={25}>
                    <ButtonComp onClick={() => navigateTo('split')} name={'SPLIT'}
                                variant={calType !== 'split' ? "outlined" : 'contained'}
                                className="searchBtn"/>
                </Grid>
            </div>
            <div className={'flex justify-evenly items-center'}>
                {tableCompMemo}
                <div className={'w-[65%]'}>
                    {calMemo}</div>
            </div>
        </Box>
    );
};
export default CalendarElement;