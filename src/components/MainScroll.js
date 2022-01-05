import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

var color_style_ = getComputedStyle(document.body)

export default class MainScroll extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = { top: 0 };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }

    handleUpdate(values) {
        const { top } = values;
        this.setState({ top });
    }

    renderView({ style, ...props }) {
        const { top } = this.state;
        let tempLight = color_style_.getPropertyValue('--primaryBackgroundLight')
        let light;
        if(tempLight >0.5) {
            light = String(Math.abs(
                top*0.15 - tempLight 
            )*100) + "%";
        } else {
            let x = Math.abs(top*0.15 + parseFloat(tempLight))*100
            light = String(x) + "%";
        }

        const viewStyle = {
            transition: `.5s`,
            backgroundColor: `hsl(55, 0%, ${light})`,
            color: `rgb(${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))})`
        };
        return (
            <div
                className="box"
                style={{ ...style, ...viewStyle }}
                {...props}/>
        );
    }

    renderThumb({ style, ...props }) {
        const { top } = this.state;
        let light = String((top)*100) + "%"
        const thumbStyle = {
            backgroundColor: `hsl(360, 0%, ${light})`,
            borderRadius: `20px`
        }
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                renderThumbHorizontal={this.renderThumb}
                renderThumbVertical={this.renderThumb}
                onUpdate={this.handleUpdate}
                {...this.props} />
        );
    }
}