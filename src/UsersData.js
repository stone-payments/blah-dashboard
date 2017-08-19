import React, { Component } from 'react';

class UsersData extends Component {
  constructor(props) {
    super(props)
    this.state = {count: undefined};
    this._getCalls(this.props.emotion);
  }
  render() {
    var phrase = "";
    if (this.state.count) {
      phrase = `${this.state.count} ${this.props.emotion} emotions in the last hour`
    }
    return (
      <div className="Smiley">
        {phrase}
      </div>
    );
  }
  _getCalls(emotion) {
    var that = this;
    fetch('mock.json').then(function success(response) {
      return response.json();
    }, function error(response) {
      console.log(response);
    }).then(function load_json_into_state(response){
      console.log(response);
      that.setState({
        count: response['count']
      });
    });
  }
}

export default UsersData;
