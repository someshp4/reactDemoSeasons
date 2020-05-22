import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = {lat : null, errMsg : ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat : position.coords.latitude}),
            (err) => this.setState({errMsg : err.message})
        );
    }

    renderContent () {
        if(!this.state.lat && this.state.errMsg) {
            return <div>Error : {this.state.errMsg}</div>;
        }

        if(this.state.lat && !this.state.errMsg) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        
        return <Spinner loaderMsg="please accept location request to proceed"/>;
    }

    render() {
       return <div>
            {this.renderContent()}
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));