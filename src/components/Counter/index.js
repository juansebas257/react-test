import { Component } from "react";
import Button from "../Button";

class Counter extends Component {
    state = {
        count: 0
    }

    counting = () => {
        console.log('countung')
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>Counter is: {count}</p>
                <Button onClick={this.counting} styles={{ backgroundColor: 'red' }}>
                    Click me!
                </Button>
            </div>
        )
    }
}

export default Counter;