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
}
