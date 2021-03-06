import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import baseCss from './ui/base';
import { blue } from './ui/colors';
import BaseCurrency from '../js/components/BaseCurrency/BaseCurrency';
import CarouselCurrencies from '../js/components/CarouselCurrencies/CarouselCurrencies';

const ConstainerStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: ${blue};
    align-items: center;
    color: #fff;
`;

class Container extends Component {
    render() {
        return (
            <ConstainerStyled>
                <BaseCurrency>1 USD</BaseCurrency>
                <CarouselCurrencies />
            </ConstainerStyled>
        )
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));
