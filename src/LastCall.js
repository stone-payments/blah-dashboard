import React, { Component } from 'react';

class LastCall extends Component {
  constructor(props) {
    super();
    this.state = {call: ""};
    this._getLastCall();
  }
  render() {
    console.log(this.state.call);
    var call = {};
    if (this.state.call) {
      var call =this.state.call;
    }
    return (
        <div>
            <h2>Last Call</h2>
            <pre>{JSON.stringify(call, null, 2) }</pre>
        </div>
    );
  }
  _getLastCall() {
    var that = this;
    fetch('http://13.82.184.181:5000/search', { method : 'POST' }).then(function success(response) {
      console.log(response)
      return response.json();
    }, function error(response) {
      console.log(response);
    }).then(function load_json_into_state(response){
      var c = response['data'][response['data'].length-1];
      console.log(c);
      that.setState({
        call: c
      });
    });
  }
}

export default LastCall;
