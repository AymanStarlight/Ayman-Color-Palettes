import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './css/Palette.css'

export class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (
            <div className='Palette'>
                {/* Nav Bar */}
                <div className="Palette-colors">
                    {/* Color Boxes */}
                    {colorBoxes}
                </div>
                {/* Footer */}
            </div>
        )
    }
}

export default Palette