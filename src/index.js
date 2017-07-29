

import Counter from './Counter';


class App extends React.Component {
    render() {
        return <div>
            <Counter />
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

