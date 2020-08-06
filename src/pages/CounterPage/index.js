import React, {Component} from 'react';
import {connect} from "react-redux"

@connect(
    ({count, hello}) => ({count, hello})
)
class CounterPage extends Component {
    add = () => {
        this.props.dispatch({
            type: "SAGA_COUNT_ADD",
            payload: 10
        });
    }
    minus = () => {
        this.props.dispatch({
            type: "SAGA_COUNT_MINUS",
            payload: 1
        });
    }
    hello = () => {
        const num = Math.ceil(1 + Math.random() * 10).toString()

        this.props.dispatch({
            type: "SAGA_HELLO",
            payload: num
        });
    }

    render() {
        const {count, hello} = this.props;

        return (
            <div>
                <h2>CounterPage</h2>
                <hr/>
                <p>Count:{count}</p>
                <button type={"button"} onClick={this.add}>加</button>
                &nbsp;
                <button type={"button"} onClick={this.minus}>减</button>
                &nbsp;
                <hr/>
                <p>Hello:{hello}</p>
                <button type={"button"} onClick={this.hello}>Hello</button>
            </div>
        );
    }
}

export default CounterPage;