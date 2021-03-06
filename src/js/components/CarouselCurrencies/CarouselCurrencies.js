import React, { Component } from 'react';
import styled from 'styled-components';

import Controls from './Controls/Controls';
import Items from './Items/Items';

const Container = styled.div`
    position: relative;
    width: 330px;
    height: 75px;
`;

class CarouselCurrencies extends Component {
    state = {
        currencies: [
            {
                code: 'EUR',
                value: '1,18',
                active: false
            },
            {
                code: 'BRL',
                value: '3,25',
                active: true
            },
            {
                code: 'CAD',
                value: '0,95',
                active: false
            }
        ],
        activePosition: -75,
        buttonUpDisabled: false,
        buttonDownDisabled: false
    }

    handleChangeCurrency = (moveIndex) => {
        this.setState(prevState => ({
            currencies: this.changeActiveItem(moveIndex, prevState.currencies),
            activePosition: this.changePosition(moveIndex, prevState.activePosition),
            buttonUpDisabled: this.isButtonUpDisabled(moveIndex,prevState.currencies),
            buttonDownDisabled: this.isButtonDownDisabled(moveIndex,prevState.currencies),
        }));
    }

    changeActiveItem(moveIndex, currencies){
        const currentIndexActive = currencies.findIndex(item => item.active);

        return currencies.map((item, index) => {
            const nextIndexActive = currentIndexActive + moveIndex;

            item.active = false;

            if(nextIndexActive === index){
                item.active = true
            }

            return item;
        })
    }

    changePosition(moveIndex, currentPosition) {
        const toDown = Math.sign(moveIndex) === -1;

        if (toDown) {
            return currentPosition + 55;
        }

        return currentPosition - 55
    }

    isButtonUpDisabled(moveIndex, currencies) {
        const currentIndexActive = currencies.findIndex(item => item.active);
        return (currentIndexActive + moveIndex) < 0;
    }

    isButtonDownDisabled(moveIndex, currencies) {
        const currentIndexActive = currencies.findIndex(item => item.active);
        return (currentIndexActive + moveIndex) === currencies.length;
    }

    render() {
        return (
            <Container>
                <Items currencies={this.state.currencies}
                       activePosition={this.state.activePosition}/>

                <Controls handleChangeCurrency={this.handleChangeCurrency}
                          buttonUpDisabled={this.state.buttonUpDisabled}
                          buttonDownDisabled={this.state.buttonDownDisabled} />
            </Container>
        )
    }
}

export default CarouselCurrencies;