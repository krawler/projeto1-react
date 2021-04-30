import { Component } from 'react';
import './style.css';

export class Button extends Component {
    render() {
        const { text, onclick, disabled } = this.props;

        return (
            <button 
                onClick={onclick} 
                className="button"
                disabled={disabled}>
               {text}
            </button>
        )
    }
};

Button.defaultProps = {
    disabled: false,
};

Button.propTypes = {
    text: P.string.isRequired,
    onClick: P.func.isRequired,
    disabled: P.bool,
};


