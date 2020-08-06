import React, {Component} from 'react';
import {connect} from "react-redux"
import {add, minus, asyncAdd, asyncMinus} from "../../redux/action"

@connect(
    ({count}) => ({count}),
    {
        add, minus, asyncAdd, asyncMinus
    }
)
class CounterPage extends Component {
    add = () => {
        this.props.add(10);
    }
    minus = () => {
        this.props.minus(10);
    }
    asyncAdd = () => {
        this.props.asyncAdd(100);
    }
    asyncMinus = () => {
        this.props.asyncMinus(100);
    }

    render() {
        const {count} = this.props
        return (
            <div>
                <h2>Counter Page</h2>
                <hr/>
                <p>{count}</p>
                <button type={"button"} onClick={this.add}>加</button>
                &nbsp;
                <button type={"button"} onClick={this.minus}>减</button>
                &nbsp;
                <button type={"button"} onClick={this.asyncAdd}>异步加</button>
                &nbsp;
                <button type={"button"} onClick={this.asyncMinus}>异步减</button>
                &nbsp;
            </div>
        );
    }
}

export default CounterPage;