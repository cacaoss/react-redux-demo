import React, {Component} from 'react';
import {connect} from "react-redux";
import {asyncLogIn, logOut, sagaLogIn} from "../../redux/action"

@connect(
    ({user}) => ({user}),
    {
        asyncLogIn, logOut, sagaLogIn
    }
)
class UserPage extends Component {
    constructor() {
        super();

        this.state = {
            name: ""
        }
    }

    nameChange = (e) => {
        const username = e.target.value;
        this.setState({username})
    }
    logIn = () => {
        const {username} = this.state;
        this.props.asyncLogIn({name: username});
    }
    logOut = () => {
        this.props.logOut();
    }

    sagaLogIn = () => {
        const {username} = this.state;
        this.props.sagaLogIn({name: username});
    }

    componentDidMount() {
        console.log("props", this.props)
    }

    render() {
        // console.log("props", this.props)
        const {user} = this.props;

        return (
            <div>
                <h2>User Page</h2>
                <hr/>
                {
                    user.isLogIn ? <UserInfo {...this.props}></UserInfo> : (<p>未登录</p>)
                }
                {
                    user.err ? (<p style={{color: "red"}}>{user.err}</p>) : null
                }
                {
                    user.lodding ? (<p>Lodding...</p>) : null
                }

                <label htmlFor="username">
                    用户名：
                    <input id={"username"}
                           type="text"
                           value={this.state.username || ""}
                           onChange={this.nameChange}
                           placeholder={"请输入用户名"}
                           autoComplete={"off"}/>
                </label>
                <br/>
                <br/>
                <button type={"button"} onClick={this.logIn}>登录</button>
                &nbsp;
                <button type={"button"} onClick={this.logOut}>退出</button>
                &nbsp;
                <button type={"button"} onClick={this.sagaLogIn}>Saga登录</button>
                &nbsp;
                <hr/>
            </div>
        );
    }
}

const UserInfo = (props) => {
    return (
        <div>
            <p>ID:{props.user.id}</p>
            <p>Name:{props.user.name}</p>
            <p>score:{props.user.score}</p>
        </div>
    )
}

export default UserPage;