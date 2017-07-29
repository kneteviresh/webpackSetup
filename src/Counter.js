import GreetingComponent from './GreetingComponent';

export default class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    static DefaultProps() {
        console.log('get Default props');
    }
    static InitialState() {
        count = 0;
        console.log('inside get initial state');
    }



    componentWillMount() {

        console.log('inside Counter : FUNCTION : componentWillMount');
    }
    componentDidMount() {
        console.log('inside Counter : FUNCTION : componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('inside Counter : New state value ', nextState.count, 'should component update .... ? ')
        if (nextState.count < 5) {
            console.log('inside Counter : component will update');
            return true;
        }
        else {
            console.log('inside Counter : component will not update')
            return false;
        }
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('inside Counter : FUNCTION : componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {

        console.log('inside Counter : FUNCTION : componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('inside Counter : FUNCTION : componentWillUnmount');
    }

    increment() {

        this.setState({
            count: this.state.count + 1
        })
    }
    decrement() {

        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return <div>
            <GreetingComponent name={this.state.count} />
            <button onClick={this.increment}> + </button>
            <button onClick={this.decrement}> - </button>
            <span> {this.state.count} </span>
        </div>
    }
}