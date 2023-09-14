import React, {Fragment, useCallback, useEffect, useMemo, useState} from 'react';
import {Box, Grid} from "@mui/material";
import Apple from "../../../assets/images/appleLogo.png";
import Google from "../../../assets/images/googleLogo.png";
import Tesla from "../../../assets/images/teslaLogo.png";
import Amazon from "../../../assets/images/amazonLogo.png";
import TableComp from "../../AiDocInsights/ReUsableComps/TableComp";
import ButtonComp from '../../AiDocInsights/ReUsableComps/BtnComp';
import {TableRow, TableCell} from "@mui/material";
import axios from "axios";
import {baseUrl} from "../../AiDocInsights/FMPUrlsAndEndpoint";

const MarketBroadView = () => {
    const [companyListingAccTo, setCompanyListingAccTo] = useState('sp500');
    const [listingData, setListingData] = useState([]);
    useEffect(() => {
        getListingData();
    }, [companyListingAccTo]);
    const getListingData = () => {
        let endpoint = baseUrl + 'get_fmp_stock_data/';
        let data = {
            version: 'v3',
            type: companyListingAccTo === 'nasdaq100' ? 'nasdaq' : companyListingAccTo === 'dow30' ? 'dowjones' : companyListingAccTo
        }
        axios.post(endpoint, data).then((res) => {
            let responseData = res.data;
            if (!responseData.success) {
                return;
            }
            setListingData(responseData.fmp_stock_data);
            console.log('res', responseData);

        })
    }
    const navigateTo = (cLAT) => {
        setCompanyListingAccTo(cLAT) //companyListingAccTo
    };

    const rows = [
        {name: 'Apple', logo: Apple, companyId: 'AAPL'},
        {name: 'Google', logo: Google, companyId: 'GGL'},
        {name: 'Tesla', logo: Tesla, companyId: 'TSLA'},
        {name: 'Nvidia', logo: Tesla, companyId: 'NVDA'},
        {name: 'Oracle', logo: Tesla, companyId: 'ORCL'},
        {name: 'Meta', logo: Tesla, companyId: 'META'},
        {name: 'Netflix', logo: Amazon, companyId: 'NFLX'},
        {name: 'Amazon', logo: Amazon, companyId: 'AMZN'},
        {name: 'Apple', logo: Apple, companyId: 'AAPL'}
    ];

    const TableCellStyle = useMemo(() => {
        return {
            fontWeight: 800,
            color: 'white'
        }
    }, [])
    const getStyle = useCallback((index) => {
        return {...TableCellStyle, backgroundColor: index % 2 === 0 ? '#12192c' : '#002147'}
    }, []);

    const TableCellSX = useMemo(() => {
        return {
            backgroundColor: '#12192c',
            fontWeight: 800,
            color: 'white'
        }
    }, [])

    return (
        <Box>
            <div className={'flex justify-evenly items-center my-4'}>
                <Grid item md={2} xs={25}>
                    <ButtonComp onClick={() => navigateTo('sp500')} name={'SP 500'}
                                variant={companyListingAccTo !== 'sp500' ? "outlined" : 'contained'}
                                className="table-sentiment-button"/>
                </Grid>
                <Grid item md={2} xs={25}>
                    <ButtonComp onClick={() => navigateTo('dow30')} name={'Dow 30'}
                                variant={companyListingAccTo !== 'dow30' ? "outlined" : 'contained'}
                                className="searchBtn"/>
                </Grid>
                <Grid item md={8} xs={25}>
                    <ButtonComp onClick={() => navigateTo('nasdaq100')} name={'Nasdaq 100'}
                                variant={companyListingAccTo !== 'nasdaq100' ? "outlined" : 'contained'}
                                className="searchBtn"/>
                </Grid>
            </div>
            {console.log('checkk', listingData)}
            <TableComp calType={companyListingAccTo} TableCellSX={TableCellSX}
                       rows={listingData}
                       getStyle={getStyle}
                       parent={'stock'}/>
        </Box>
    );
}
export default MarketBroadView;