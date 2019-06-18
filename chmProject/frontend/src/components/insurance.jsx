import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        insuredFarms :0,
     }
    render() { 
        return <React.Fragment>
                <span className = 'badge badge-primary m-2'>{this.formatInsuredFarms()}</span>
                <button>Delete</button>
            </React.Fragment>
    }

    formatInsuredFarms(){
        return this.state.insuredFarms === 0 ? 'None' : this.state.insuredFarms;
    }
}
Counter.propTypes = {
};
 
export default Counter;