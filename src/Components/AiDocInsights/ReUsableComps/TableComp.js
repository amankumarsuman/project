import React, {Fragment, useMemo} from "react";
import {Table, TableHead, TableBody, TableContainer, TableRow, TableCell, Paper, Grid} from "@mui/material";

const TableComp = ({
                       tableHead,
                       calType,
                       TableCellSX,
                       rows,
                       getStyle,
                       callStyles,
                       parent,
                       height = '100vh',
                       paperStyle =
                           {
                               height: '80vh',
                               overflow: 'auto',
                               width: '98%',
                               backgroundColor: '#12192c',
                               border: '1px solid #aa9999',
                               borderRadius: '18px',
                               padding: '5px 20px',
                               margin: '10px',
                           },
                       children
                   }) => {
    const ml5 = useMemo(() => {
        return {marginLeft: '15px'}
    });
    // const IPOCalendarMemo = useMemo(() => rows.map((row, index) => (
    //     <Fragment>
    //         <TableRow key={index} hover>
    //             <TableCell name={index} sx={() => getStyle(index)}
    //                        scope="row">{index + 1}</TableCell>
    //             <TableCell sx={() => getStyle(index)}>{row.symbol}</TableCell>
    //             <TableCell sx={() => getStyle(index)}>{row.filingDate}</TableCell>
    //             <TableCell sx={() => getStyle(index)}>{row.pricePublicPerShare}</TableCell>
    //             <TableCell sx={() => getStyle(index)}>{row.pricePublicTotal}</TableCell>
    //             <TableCell sx={() => getStyle(index)}>{row.proceedsBeforeExpensesPerShare}</TableCell>
    //             <TableCell sx={() => getStyle(index)}>{row.proceedsBeforeExpensesTotal}</TableCell>
    //         </TableRow>
    //     </Fragment>
    // )), [rows])
    const IPOConfirmedCalendarMemo = useMemo(() => rows.map((row, index) => (
        <Fragment>
            <TableRow key={index} hover>
                <TableCell name={index} sx={() => getStyle(index)}
                           scope="row">{index + 1}</TableCell>
                <TableCell sx={() => getStyle(index)}>{row.symbol}</TableCell>
                <TableCell sx={() => getStyle(index)}>{row.filingDate}</TableCell>
                <TableCell sx={() => getStyle(index)}>{row.effectivenessDate}</TableCell>
                <TableCell sx={() => getStyle(index)}>{row.acceptedDate}</TableCell>
            </TableRow>
        </Fragment>
    )), [rows])
    const splitCalendarMemo = useMemo(() => rows.map((row, index) => (
        <Fragment>
            <TableRow key={index} hover>
                <TableCell name={index} sx={() => getStyle(index)}
                           scope="row">{index + 1}</TableCell>
                <TableCell
                    // style={{display: "flex", alignItems: 'center'}}
                    sx={() => getStyle(index)}>
                    {row.symbol}
                </TableCell>
                <TableCell sx={() => getStyle(index)}>{row.date}</TableCell>
            </TableRow>
        </Fragment>
    )), [rows])
    const earningCalendarMemo = useMemo(() => rows.map((row, index) => (
        <Fragment>
            <TableRow key={index} hover>
                <TableCell name={index} sx={() => getStyle(index)}
                           scope="row">{index + 1}</TableCell>
                <TableCell
                    sx={() => getStyle(index)}>
                    {row.symbol}
                </TableCell>
                <TableCell sx={() => getStyle(index)}>{row.time}</TableCell>
                <TableCell sx={() => getStyle(index)} colSpan={2}>
                    <TableRow>
                        <TableCell style={{border: 'none'}} sx={() => getStyle(index)}>
                            {row.epsEstimated}
                        </TableCell>
                        <TableCell style={{border: 'none'}} sx={() => getStyle(index)}>
                            {row.revenueEstimated}
                        </TableCell>
                    </TableRow>
                </TableCell>
                <TableCell sx={() => getStyle(index)} colSpan={2}>
                    <TableRow>
                        <TableCell style={{border: 'none'}} sx={() => getStyle(index)}>
                            {row.eps}

                        </TableCell>
                        <TableCell style={{border: 'none'}} sx={() => getStyle(index)}>
                            {row.revenue}

                        </TableCell>
                    </TableRow>
                </TableCell>
            </TableRow>
        </Fragment>
    )), [rows])
    const dividendCalendar = useMemo(() => rows.map((row, index) => (
        <Fragment>
            <TableRow key={index} hover>
                <TableCell name={index} sx={() => getStyle(index)}
                           scope="row">{index + 1}</TableCell>
                <TableCell
                    // style={{display: "flex", alignItems: 'center'}}
                    sx={() => getStyle(index)}>
                    {/*<img src={row.symbol} alt="Company Logo" width={30} className={'mr-2'}/>*/}
                    {row.symbol}
                </TableCell>
                <TableCell sx={() => getStyle(index)}>{row.dividend}</TableCell>
                <TableCell sx={() => getStyle(index)}>{row.declarationDate}</TableCell>
                <TableCell sx={() => getStyle(index)}>{row.paymentDate}</TableCell>
                <TableCell sx={() => getStyle(index)}>{row.recordDate}</TableCell>
                <TableCell sx={() => getStyle(index)}>{row.adjDividend}</TableCell>
            </TableRow>
        </Fragment>
    )), [rows])
    const insiderTradingMemo = useMemo(() => rows.map((row, index) => {
        let randomVal = row.acquistionOrDisposition === 'A' ? 0 : 1;
        return (
            <Fragment>
                <TableRow key={index} hover>
                    <TableCell name={index}
                               sx={() => callStyles(index, randomVal)}
                               scope="row">{index + 1}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, randomVal)}>
                        {row.symbol}
                    </TableCell>
                    <TableCell
                        sx={() => callStyles(index, randomVal)}>
                        {row.filingDate}
                    </TableCell>
                    <TableCell
                        sx={() => callStyles(index, randomVal)}>
                        {row.transactionDate}
                    </TableCell>
                    <TableCell
                        sx={() => callStyles(index, randomVal)}>{row.reportingName}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, randomVal)}>{row.typeOfOwner}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, randomVal)}>{row.securitiesOwned}</TableCell>
                    {/*<TableCell*/}
                    {/*    sx={() => callStyles(index, randomVal)}>{row.securitiesTransacted}</TableCell>*/}
                    {/*<TableCell*/}
                    {/*    sx={() => callStyles(index, randomVal)}>{row.securitiesOwned}</TableCell>*/}
                    {/*<TableCell*/}
                    {/*    sx={() => callStyles(index, randomVal)}>{row.remaining}</TableCell>*/}
                </TableRow>
            </Fragment>
        )
    }), [rows])
    const dailyMarketMovers = useMemo(() => rows.map((row, index) =>
        (
            <Fragment>
                <TableRow key={index} hover>
                    <TableCell name={index}
                               sx={() => callStyles(index, 'green')}
                               scope="row">{index + 1}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, 'green')}>
                        {row.code}
                    </TableCell>
                    <TableCell
                        sx={() => callStyles(index, 'green')}>{row.symbol}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, 'green')}>{row.price}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, 'green')}>{row.change}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, 'green')}>{row.changePercentage}</TableCell>
                </TableRow>
            </Fragment>
        )
    ), [rows])
    const dailyMarketLosers = useMemo(() => rows.map((row, index) =>
        (
            <Fragment>
                <TableRow key={index} hover>
                    <TableCell name={index}
                               sx={() => callStyles(index, 1)}
                               scope="row">{index + 1}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, 1)}>
                        {row.code}
                    </TableCell>
                    <TableCell
                        sx={() => callStyles(index, 1)}>{row.symbol}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, 1)}>{row.price}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, 1)}>{row.change}</TableCell>
                    <TableCell
                        sx={() => callStyles(index, 1)}>{row.changePercentage}</TableCell>
                </TableRow>
            </Fragment>
        )
    ), [rows])
    const mostActive = useMemo(() => rows.map((row, index) =>
        (
            <Fragment>
                <TableRow key={index} hover>
                    <TableCell name={index}
                               sx={() => callStyles(index)}
                               scope="row">{index + 1}</TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>
                        {row.code}
                    </TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>{row.symbol}</TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>{row.price}</TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>{row.change}</TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>{row.changePercentage}</TableCell>
                </TableRow>
            </Fragment>
        )
    ), [rows])
    const dailySector = useMemo(() => rows.map((row, index) =>
        (
            <Fragment>
                <TableRow key={index} hover>
                    <TableCell name={index}
                               sx={() => callStyles(index)}
                               scope="row">{index + 1}</TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>
                        {row.logo}
                    </TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>{row.symbol}</TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>{row.price}</TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>{row.change}</TableCell>
                    <TableCell
                        sx={() => callStyles(index)}>{row.changePercentage}</TableCell>
                </TableRow>
            </Fragment>
        )
    ), [rows])
    const sp500Memo = useMemo(() => rows.map((row, index) =>
        (
            <Fragment>
                <TableRow key={index} hover>
                    <TableCell name={index} sx={() => getStyle(index)}
                               scope="row">{index + 1}</TableCell>
                    <TableCell
                        sx={() => getStyle(index)}>
                        <img src={row.logo} alt="Company Logo" width={30}/>
                    </TableCell>
                    <TableCell
                        sx={() => getStyle(index)}>
                        {row.name}
                    </TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.sector}</TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.subSector}</TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.headQuarter}</TableCell>
                    <TableCell sx={() => getStyle(index)}>
                        {row.founded}
                    </TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.dateFirstAdded}</TableCell>
                </TableRow>
            </Fragment>
        )
    ), [rows])
    const dow30Memo = useMemo(() => rows.map((row, index) =>
        (
            <Fragment>
                <TableRow key={index} hover>
                    <TableCell name={index} sx={() => getStyle(index)}
                               scope="row">{index + 1}</TableCell>
                    <TableCell
                        sx={() => getStyle(index)}>
                        <img src={row.logo} alt="Company Logo" width={30}/>
                    </TableCell>
                    <TableCell
                        sx={() => getStyle(index)}>
                        {row.name}
                    </TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.sector}</TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.subSector}</TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.headQuarter}</TableCell>
                    <TableCell sx={() => getStyle(index)}>
                        {row.founded}
                    </TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.dateFirstAdded}</TableCell>
                </TableRow>
            </Fragment>
        )
    ), [rows])
    const nasdaq100Memo = useMemo(() => rows.map((row, index) =>
        (
            <Fragment>
                <TableRow key={index} hover>
                    <TableCell name={index} sx={() => getStyle(index)}
                               scope="row">{index + 1}</TableCell>
                    <TableCell
                        sx={() => getStyle(index)}>
                        <img src={row.logo} alt="Company Logo" width={30}/>
                    </TableCell>
                    <TableCell
                        sx={() => getStyle(index)}>
                        {row.name}
                    </TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.sector}</TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.subSector}</TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.headQuarter}</TableCell>
                    <TableCell sx={() => getStyle(index)}>
                        {row.founded}
                    </TableCell>
                    <TableCell sx={() => getStyle(index)}>{row.dateFirstAdded}</TableCell>
                </TableRow>
            </Fragment>
        )
    ), [rows])
    return (
        parent === 'calendar' && calType === 'ipo' ?
            <TableComp rows={rows} tableHead={
                <TableRow>
                    <TableCell className={'items-center'} sx={TableCellSX}>S.NO</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>Filing Date</TableCell>
                    <TableCell className={'items-center'}
                               sx={TableCellSX}>Effectiveness Date</TableCell>
                    <TableCell className={'items-center'}
                               sx={TableCellSX}>Accepted Date</TableCell>
                </TableRow>
            }>
                {IPOConfirmedCalendarMemo}
            </TableComp> : parent === 'calendar' && calType === 'split' ? <TableComp rows={rows} tableHead={
                <TableRow>
                    <TableCell className={'items-center'} sx={TableCellSX}>Sr.No</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>ANNOUNCE DATE</TableCell>
                </TableRow>}>
                {splitCalendarMemo}
            </TableComp> : parent === 'calendar' && calType === 'earningCalendar' ? <TableComp rows={rows} tableHead={
                <TableRow>
                    <TableCell className={'items-center'} style={{paddingTop: '48px'}} sx={TableCellSX}>Sr.No</TableCell>
                    <TableCell className={'items-center'} style={{paddingTop: '48px'}} sx={TableCellSX}>SYMBOL</TableCell>
                    <TableCell className={'items-center'} style={{paddingTop: '48px'}} sx={TableCellSX}>TIME</TableCell>
                    <TableCell className={'items-center'}
                               sx={TableCellSX} colSpan={2}>
                        <div className={'flex justify-center mb-2'}>ESTIMATE</div>
                        <Grid container spacing={2} style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
                            <Grid item xs={12} style={ml5}>
                                EPS
                            </Grid>
                            <Grid item xs={12} style={ml5}>
                                REVENUE
                            </Grid>
                        </Grid>
                    </TableCell>
                    <TableCell className={'items-center'}
                               sx={TableCellSX} colSpan={2}>
                        <div className={'flex justify-center'}>ACTUAL</div>
                        <Grid container spacing={2} style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
                            <Grid item xs={12} style={ml5}>
                                EPS
                            </Grid>
                            <Grid item xs={12} style={ml5}>
                                REVENUE
                            </Grid>
                        </Grid>
                    </TableCell>
                </TableRow>}>
                {earningCalendarMemo}
            </TableComp> : parent === 'calendar' && calType === 'dividendCalendar' ? <TableComp rows={rows} tableHead={
                <TableRow>
                    <TableCell className={'items-center'} sx={TableCellSX}>Sr.No</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>DIVIDEND</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>DECLARATION DATE</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>PAYMENT DATE</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>RECORD DATE</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>ADJ. DIVIDEND</TableCell>
                </TableRow>}>
                {dividendCalendar}
            </TableComp> : parent === 'trading' && calType === 'insiderTrading' ? <TableComp rows={rows} tableHead={
                <TableRow>
                    <TableCell className={'items-center'} sx={TableCellSX}>S.NO</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>FILE DATE</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>TRADE DATE</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>INSIDER NAME</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>POSITION</TableCell>
                    <TableCell className={'items-center'} sx={TableCellSX}>SHARE PRICE</TableCell>
                    {/*<TableCell className={'items-center'} sx={TableCellSX}>SHARES</TableCell>*/}
                    {/*<TableCell className={'items-center'} sx={TableCellSX}>VALUE</TableCell>*/}
                    {/*<TableCell className={'items-center'} sx={TableCellSX}>SHARES REMAINING</TableCell>*/}
                </TableRow>}>
                {insiderTradingMemo}
            </TableComp> : parent === 'trading' && calType === 'dailyMarketMovers' ?
                <Fragment>
                    <div className={'text-white text-2xl ml-5 mt-5'}>Daily Gainers</div>
                    <TableComp rows={rows} height={'50vh'} tableHead={
                        <TableRow>
                            <TableCell className={'items-center'} sx={TableCellSX}>S.NO</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>LOGO</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>PRICE</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>CHANGE</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>CHANGE%</TableCell>
                        </TableRow>}>
                        {dailyMarketMovers}
                    </TableComp>
                    <div className={'text-white text-2xl ml-5 mt-5'}>Daily Losers</div>

                    <TableComp rows={rows} height={'50vh'} tableHead={
                        <TableRow>
                            <TableCell className={'items-center'} sx={TableCellSX}>S.NO</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>LOGO</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>PRICE</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>CHANGE</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>CHANGE%</TableCell>
                        </TableRow>}>
                        {dailyMarketLosers}
                    </TableComp>
                    <div className={'text-white text-2xl ml-5 mt-5'}>Most Active</div>

                    <TableComp rows={rows} height={'50vh'} tableHead={
                        <TableRow>
                            <TableCell className={'items-center'} sx={TableCellSX}>S.NO</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>LOGO</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>PRICE</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>CHANGE</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>CHANGE%</TableCell>
                        </TableRow>}>
                        {mostActive}
                    </TableComp>

                    <div className={'text-white text-2xl ml-5 mt-5'}>DAILY SECTOR PERFORMANCE</div>
                    <TableComp rows={rows} height={'50vh'} tableHead={
                        <TableRow>
                            <TableCell className={'items-center'} sx={TableCellSX}>S.NO</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>LOGO</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>PRICE</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>CHANGE</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>CHANGE%</TableCell>
                        </TableRow>}>
                        {dailySector}
                    </TableComp></Fragment> :
                parent === 'stock' && calType === 'sp500' ? <TableComp rows={rows} tableHead={
                        <TableRow>
                            <TableCell className={'items-center'} sx={TableCellSX}>Sr.No</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>NAME</TableCell>
                            <TableCell className={'items-center'}
                                       sx={TableCellSX}>SECTOR</TableCell>
                            <TableCell className={'items-center'}
                                       sx={TableCellSX}>SUB-SECTOR</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>HEAD QUARTER</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>FOUNDED</TableCell>
                            <TableCell className={'items-center'} sx={TableCellSX}>DATE FIRST ADDED</TableCell>
                        </TableRow>}>
                        {sp500Memo}
                    </TableComp> :
                    parent === 'stock' && calType === 'dow30' ? <TableComp rows={rows} tableHead={
                            <TableRow>
                                <TableCell className={'items-center'} sx={TableCellSX}>Sr.No</TableCell>
                                <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                                <TableCell className={'items-center'} sx={TableCellSX}>NAME</TableCell>
                                <TableCell className={'items-center'}
                                           sx={TableCellSX}>SECTOR</TableCell>
                                <TableCell className={'items-center'}
                                           sx={TableCellSX}>SUB-SECTOR</TableCell>
                                <TableCell className={'items-center'} sx={TableCellSX}>HEAD QUARTER</TableCell>
                                <TableCell className={'items-center'} sx={TableCellSX}>FOUNDED</TableCell>
                                <TableCell className={'items-center'} sx={TableCellSX}>DATE FIRST ADDED</TableCell>
                            </TableRow>}>
                            {dow30Memo}
                        </TableComp> :
                        parent === 'stock' && calType === 'nasdaq100' ? <TableComp rows={rows} tableHead={
                                <TableRow>
                                    <TableCell className={'items-center'} sx={TableCellSX}>Sr.No</TableCell>
                                    <TableCell className={'items-center'} sx={TableCellSX}>SYMBOL</TableCell>
                                    <TableCell className={'items-center'} sx={TableCellSX}>NAME</TableCell>
                                    <TableCell className={'items-center'}
                                               sx={TableCellSX}>SECTOR</TableCell>
                                    <TableCell className={'items-center'}
                                               sx={TableCellSX}>SUB-SECTOR</TableCell>
                                    <TableCell className={'items-center'} sx={TableCellSX}>HEAD QUARTER</TableCell>
                                    <TableCell className={'items-center'} sx={TableCellSX}>FOUNDED</TableCell>
                                    <TableCell className={'items-center'} sx={TableCellSX}>DATE FIRST ADDED</TableCell>
                                </TableRow>}>
                                {nasdaq100Memo}
                            </TableComp> :
                            <Paper elevation={3} style={paperStyle}>

                                <TableContainer sx={{height: height}}>
                                    <Table stickyHeader aria-label="simple table" size="medium">
                                        <TableHead>
                                            {tableHead}
                                        </TableHead>
                                        <TableBody>
                                            {children}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
    )
}
export default TableComp;