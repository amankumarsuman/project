import React from 'react';
const PageHandler = (props) => {
    return(
    //     width: 100%;
    // display: flex;
    // justify-content: end;
    // height: 100vh;
        <div className={'flex justify-end h-100 items-end'}>
            {props.children}
        </div>
    )
}
export default PageHandler;