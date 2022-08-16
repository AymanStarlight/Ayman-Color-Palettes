import React, { Component } from 'react'
import ColorBox from './ColorBox'

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './css/Palette.css'

export class Palette extends Component {
    state = {
        level: 500
    }

    changeLevel = (newLevel) => {
        this.setState({
            level: newLevel
        })
    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className='Palette'>
                <div className="slider">
                    <Slider
                        defaultValue={this.state.level}
                        min={100}
                        max={900}
                        step={100}
                        onChange={this.changeLevel}

                    />
                </div>

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