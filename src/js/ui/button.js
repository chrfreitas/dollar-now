import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
    background: transparent;
    border: 1px solid #fff;
    border-radius: 3px;
    color: #fff;
    padding: 5px 30px;
    text-transform: uppercase;
    cursor: pointer;

    &:disabled {
        opacity: .2;
    }
`;

class Button extends Component {
    static propTypes = {
        children: PropTypes.any
    }

    render() {
        return (
            <ButtonStyled>
                { this.props.children }
            </ButtonStyled>
        )
    }
}

export { Button, ButtonStyled }
