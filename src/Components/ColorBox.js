import React, { Component } from 'react'
import './css/ColorBox.css'

export class ColorBox extends Component {
    render() {
        const { name, background } = this.props;
        return (
            <div style={{ background: background }} className='ColorBox'>
                <div className="copy-container">
                    <div className="box-content">
                        <span className='name'>{name}</span>
                    </div>
                    <button className="copy-btn">Copy</button>
                </div>
                <span className='see-more'>MORE</span>
            </div>
        )
    }
}

export default ColorBox