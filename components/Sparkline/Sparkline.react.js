import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Sparkline.scss'
import {Sparklines, SparklinesLine} from 'react-sparklines'


let SparklineLine = React.createClass({
    getInitialState: function()
    {
        return {
            width: 0,
            height: 0
        }
    },
    componentDidMount: function()
    {
        var width = this.refs.sparklineContainer.offsetWidth;
        var height = this.refs.sparklineContainer.offsetHeight;

        console.log(width, height);

        this.setState({
            width: width,
            height: height
        });
    },
    render: function()
    {
        return (
            <div className={styles['sparkline-container']} ref="sparklineContainer">
                <Sparklines data={[5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20]} width={this.state.width} height={this.state.height}>
                    <SparklinesLine color="blue" />
                </Sparklines>
                <div className={styles.helloSparkline}>Hello sparkline.</div>
                <div className={'helloSparkline'}>Hello sparkline Later.</div>
            </div>
        )
    }
})

export {SparklineLine}
