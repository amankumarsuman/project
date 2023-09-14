import React from 'react';
const MapAnalysis = ({item}) => {
    return (
        <tr>                {console.log("item", item)}

            <td>
                {item.ESGScore}
            </td>

            <td>
                {item.companyName}
            </td>

            <td>
                {item.symbol}
            </td>
            <td>
                {item.acceptedDate}
            </td>
            <td>
                {item.cik}
            </td>
            <td>
                {item.environmentalScore}
            </td>
            <td>
                {item.governanceScore}
            </td>
            <td>
                {item.socialScore}
            </td>
            <td>
                {item.date}
            </td>
            {/*<td>*/}
            {/*    {item.url}*/}
            {/*</td>*/}
        </tr>
    )
}
export default MapAnalysis;