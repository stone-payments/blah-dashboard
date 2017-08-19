import React, { Component } from 'react';
import very_negative from './img/1-very_negative.png';
import negative from './img/2-negative.png';
import neutral from './img/3-neutral.png';
import positive from './img/4-positive.png';
import very_positive from './img/5-very_positive.png';
import './Emotions.css';

class Emotions extends Component {
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
    var img = "";
    if (this.props.emotion == 'very negative') {
      img = <img src={very_negative} />
    }
    if (this.props.emotion == 'negative') {
      img = <img src={negative} />
    }
    if (this.props.emotion == 'neutral') {
      img = <img src={neutral} />
    }
    if (this.props.emotion == 'positive') {
      img = <img src={positive} />
    }
    if (this.props.emotion == 'very positive') {
      img = <img src={very_positive} />
    }
    
    return (
      <div className="Emotions">
        <div>{img}</div>
        <p>{phrase}</p>
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
      that.setState({
        count: response['count']
      });
    });
  }
}

export default Emotions;
