import React from 'react';
export default class GreetingComponent extends React.Component {

    static defaultProps = {
        name: "viresh" 
    }

    componentWillReceiveProps(nextProps) {
        console.log('inside Greeting : FUNCTION : componentWillReceiveProps: new prop recieved is ', nextProps.name);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('inside Greeting : FUNCTION : shouldComponentUpdate')

        return true;

    }

    componentWillUpdate(nextProps, nextState) {
        console.log('inside Greeting : FUNCTION : componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('inside Greeting : FUNCTION : componentDidUpdate');
    }

    render() {
        return <div> welcome to react  {this.props.name} </div>
    }
}