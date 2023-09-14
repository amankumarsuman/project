import React, {useState} from 'react';
import ParentComponent from "../Components/AiDocInsights/ReUsableComps/ParentComponent";

const WSPage = () => {
    const [ticker, setTicker] = useState('aapl');
    const [vals, setVals] = useState([]);
    console.log('check', window.location.host)
    let socket = new WebSocket(`ws://127.0.0.1:8000/ws/`);
    // console.log('client', socket)
    socket.onmessage = function (e) {
        let data = JSON.parse(e.data);
        console.log('data', data);
        setVals([...vals, data]);
    }
    socket.onopen = function (e) {
        socket.send(JSON.stringify({
            'msg': "hello from client",
            'type': 'real-time-price'
        }))
    }
    const changeTicker = (e) => {
        setTicker(e.target.value);
    };

    const callTicker = () => {
        socket.send(JSON.stringify({
            'ticker': ticker
        }));
    }

    return (
        <ParentComponent>
            <input onChange={changeTicker} style={{color: 'black'}} placeholder={'Hello world'} value={ticker}/>
            <button onClick={callTicker}>call</button>
            {vals?.map((val)=><div>{val.s} | {val.lp}</div>)}
        </ParentComponent>
    )
}
export default WSPage;