import React from "react";
import { Item, Main, Title } from './styledComponents'

const AvailableTickers = ({ removedTickers, recoverTicker }) => {
    console.log(removedTickers)

    return (
        <Main>
            {removedTickers.length !== 0 && <Title>{'Available tickers'}</Title>}
            {removedTickers && removedTickers.map(el => <Item onClick={ () => recoverTicker(el) }>{el}</Item>)}
        </Main>
    );
}

export default AvailableTickers;
