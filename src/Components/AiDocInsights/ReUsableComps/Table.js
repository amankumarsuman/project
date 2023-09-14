import React from 'react';

const Table = ({thead, tbody}) => {
    return <table>
        <thead>
        {thead}
        {tbody}
        </thead>
    </table>
}
export default Table;