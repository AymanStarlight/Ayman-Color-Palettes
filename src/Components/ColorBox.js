import React, { Component } from 'react'
import './css/ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export class ColorBox extends Component {
    state = {
        copied: false
    }

    handleCopy = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false })
            }, 1500);
        })
    }

    render() {
        const { name, background } = this.props;
        const copied = this.state.copied
        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{ background: background }} className='ColorBox'>
                    <div style={{ background: background }} className={`copy-overlay ${copied && "show"}`}></div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>COPIED!!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className='name'>{name}</span>
                        </div>
                        <button className="copy-btn">Copy</button>
                    </div>
                    <span className='see-more'>MORE</span>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox