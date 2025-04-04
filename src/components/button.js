
import { Component } from "react";

class Button extends Component{
    state = {
        age : 42,  
    }
    handeleAgeChange = () => {
        this.setState({age : this.state.age + 1})
    }

    render() {
    return <div>
        <button onClick={this.handeleAgeChange}>
            zmen vek


        </button>
        <p className='text-cyan-400'>
            {this.state.age}
            {process.env.REACT_APP_API_URL}

        </p>
    </div>
    }

}
export default Button;