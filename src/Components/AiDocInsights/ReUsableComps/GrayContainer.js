import React from 'react';

export const GrayContainer = ({className = '', children}) => {
    return (<div className={'bg-[#343232] ' + className}>
        {children}
    </div>)
};

export const DarkGrayContainer = ({className = '', children}) => {
    return (<div className={'bg-[#595656] ' + className}>
        {children}
    </div>)
};

export const GContainer = ({className = '', children}) => {
    return (<div className={'bg-d-gray ' + className}>
        {children}
    </div>)
};
export default GrayContainer;