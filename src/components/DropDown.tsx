import React from 'react'

import styled from '@emotion/styled'
import ArrowDown from '../resources/arrow-down.svg'
import { colors, shadows } from '../styles/variables'

const StyledDropDown = styled.div`
    position: relative;

    button {
        display: flex;
        align-items: center;
        border: none;
        transition: all .2s;
        max-width: 20rem;

        @media(max-width: 980px) {
            margin: 0 auto;
        }

        &::before {
            content: "";
            position: absolute;
            bottom: -1rem;
            left: 0;
            right: 100%;
            border-bottom: 2px solid ${colors.white};
            transition: all .4s cubic-bezier(0,.5,0, 1);

            @media(max-width: 980px) {
               display: none;
            }
        }

        &:hover {
            color: ${colors.link};

            &::before {
                right: 0;
                border-color: ${colors.link};
            }
        }
    }

    img {
        height: .8rem;
        margin-left: 1rem;
        transition: all .2s ease-in-out;
    }

    ul {
        position: absolute;
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        width: 120%;
        padding: .5rem .5rem 1rem;
        background: ${colors.offWhite};
        box-shadow: ${shadows.light};
        z-index: 1000;
        transition: all .25s ease-in-out;

        @media(max-width: 980px) {
            max-width: 15rem;
            max-height: 15rem;
        }
    }

    li {
        margin: 1rem 0 0!important;
        font-size: 90%;
        width: 100%;
        padding: 0 1.5rem;
    }
`

interface DropDownProps {
    title: string
}

class DropDown extends React.Component<DropDownProps, {}> {

    state = {
        isRendered: false
    }

    handleClick = () => {
        this.setState({isRendered: !this.state.isRendered})
    }

    render () {
        const { title, children } = this.props
        const { isRendered } = this.state

        return (
            <StyledDropDown>
                <button
                    onClick={this.handleClick}
                >
                    <div>{title}</div>
                    <img
                        alt="Arrow"
                        src={ArrowDown}
                        style={ isRendered ? {transform: 'rotate(180deg)'}: {} }
                    />
                </button>

                <ul style={ isRendered ? {opacity: 1, transform: 'scale(1) translate(-50%, 0)', background: colors.white } : {opacity: 0, transform: 'scale(0) translate(-50%, -20rem)'} }>{children}</ul>
            </StyledDropDown>
        )
    }
}
export default DropDown