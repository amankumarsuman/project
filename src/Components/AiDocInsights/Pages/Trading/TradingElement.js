import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Box} from "@mui/material";
import TableComp from "../../ReUsableComps/TableComp";
import {baseUrl} from "../../FMPUrlsAndEndpoint";
import axios from "axios";

const TradingElement = () => {
    const [insiderTradingData, setInsiderTradingData] = useState([]);
    useEffect(() => {
        getInsiderTrading()
    }, []);
    const getInsiderTrading = () => {
        let endpoint = baseUrl + 'get_insider_trading/';
        axios.post(endpoint).then((res) => {
            let responseData = res.data;
            if (!responseData.success) {
                return;
            }
            console.log('resss', responseData)
            setInsiderTradingData(responseData.fmp_insider_data);
        })
    }
    // const rows = [
    //     {
    //         code: 'ET',
    //         insider: 'WARREN KELCY L',
    //         date: ' Aug 21',
    //         action: 'Buy',
    //         shares: 14,
    //         shareValue: 950,
    //         remaining: 450,
    //         value: 45
    //     },
    //     {
    //         code: 'ET',
    //         insider: 'WARREN KELCY L ',
    //         date: 'Aug 18',
    //         action: 'Buy',
    //         shares: 14,
    //         shareValue: 245,
    //         remaining: 450,
    //         value: 35
    //     },
    //     {
    //         code: 'ASAN',
    //         insider: 'Moskovitz Dustin A.',
    //         date: 'Aug 17 ',
    //         action: 'Buy',
    //         shares: 10,
    //         shareValue: 160,
    //         remaining: 150,
    //         value: 66
    //     },
    //     {
    //         code: 'WEN',
    //         insider: 'PELTZ NELSON',
    //         date: 'Aug 22',
    //         action: 'Sale',
    //         shares: 58,
    //         shareValue: 983,
    //         remaining: 223,
    //         value: 32
    //     },
    //     {
    //         code: 'WEN',
    //         insider: 'MAY PETER W',
    //         date: 'Aug 22',
    //         action: 'Sale',
    //         shares: 58,
    //         shareValue: 983,
    //         remaining: 0,
    //         value: 56
    //     },
    //     {
    //         code: 'WEN',
    //         insider: 'Peltz Matthew H.',
    //         date: 'Aug 22',
    //         action: 'Sale',
    //         shares: 58,
    //         shareValue: 983,
    //         remaining: 0,
    //         value: 22
    //     },
    // ];
    //
    // const dailyMovers = useMemo(() => [
    //     {
    //         logo: 'ET',
    //         symbol: 'WARREN KELCY L',
    //         price: ' Aug 21',
    //         change: 'Buy',
    //         changePercentage: 14,
    //     }, {
    //         logo: 'ET',
    //         symbol: 'WARREN KELCY L',
    //         price: ' Aug 21',
    //         change: 'Buy',
    //         changePercentage: 14,
    //     }, {
    //         logo: 'ET',
    //         symbol: 'WARREN KELCY L',
    //         price: ' Aug 21',
    //         change: 'Buy',
    //         changePercentage: 14,
    //     }, {
    //         logo: 'ET',
    //         symbol: 'WARREN KELCY L',
    //         price: ' Aug 21',
    //         change: 'Buy',
    //         changePercentage: 14,
    //     }, {
    //         logo: 'ET',
    //         symbol: 'WARREN KELCY L',
    //         price: ' Aug 21',
    //         change: 'Buy',
    //         changePercentage: 14,
    //     }, {
    //         logo: 'ET',
    //         symbol: 'WARREN KELCY L',
    //         price: ' Aug 21',
    //         change: 'Buy',
    //         changePercentage: 14,
    //     }, {
    //         logo: 'ET',
    //         symbol: 'WARREN KELCY L',
    //         price: ' Aug 21',
    //         change: 'Buy',
    //         changePercentage: 14,
    //     }, {
    //         logo: 'ET',
    //         symbol: 'WARREN KELCY L',
    //         price: ' Aug 21',
    //         change: 'Buy',
    //         changePercentage: 14,
    //     },
    // ], []);

    // const PaperStyle = useMemo(() => {
    //     return {
    //         height: '80vh',
    //         overflow: 'auto',
    //         width: '100%',
    //         backgroundColor: '#12192c',
    //     }
    // }, [])

    const TableCellBgLightSX = useMemo(() => {
        return {
            backgroundColor: '#002147',
            fontWeight: 800,
            color: 'white',
        }
    }, [])
    const TableCellBgDarkSX = useMemo(() => {
        return {
            backgroundColor: '#12192c',
            fontWeight: 800,
            color: 'white'
        }
    }, [])
    const getStyle = useCallback((index) => {
        return index % 2 === 0 ? {TableCellBgLightSX} : TableCellBgDarkSX
    }, []);

    const getGreenOrRedStyle = useCallback((redOrGreen) => {
        console.log('color', redOrGreen)
        return {
            ...TableCellBgLightSX,
            color: 'white',
            backgroundColor: redOrGreen === 'green' || !redOrGreen ? 'rgb(44 154 95)' : '#e14444'
        }
    }, []);

    const callStyles = useCallback((index, randomVal) => {
        let redOrGreenColor = randomVal ? 'green' : 'red';
        return getGreenOrRedStyle(redOrGreenColor)
    }, []);

    const TableCellSX = useMemo(() => {
        return {
            backgroundColor: '#12192c',
            fontWeight: 800,
            color: 'white'
        }
    }, []);

    const tableMemo = useMemo(() =>
        <TableComp calType={'insiderTrading'} TableCellSX={TableCellSX} rows={insiderTradingData}
                   callStyles={callStyles}
                   getStyle={getStyle} parent={'trading'}/>, [insiderTradingData]);

    return (
        <Box>
            {tableMemo}
        </Box>
    );
}
export default TradingElement;